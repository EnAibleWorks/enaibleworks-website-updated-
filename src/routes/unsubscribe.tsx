import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { PageShell } from '@/components/PageShell'

type State =
  | { kind: 'loading' }
  | { kind: 'ready' }
  | { kind: 'already' }
  | { kind: 'invalid' }
  | { kind: 'success' }
  | { kind: 'error'; message: string }

export const Route = createFileRoute('/unsubscribe')({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === 'string' ? search.token : '',
  }),
  head: () => ({
    meta: [
      { title: 'Unsubscribe — EnAibleWorks' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: Unsubscribe,
})

function Unsubscribe() {
  const { token } = useSearch({ from: '/unsubscribe' })
  const [state, setState] = useState<State>({ kind: 'loading' })

  useEffect(() => {
    if (!token) {
      setState({ kind: 'invalid' })
      return
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then(async (res) => {
        const data = await res.json().catch(() => ({}))
        if (!res.ok) return setState({ kind: 'invalid' })
        if (data.valid === false && data.reason === 'already_unsubscribed') {
          return setState({ kind: 'already' })
        }
        if (data.valid) return setState({ kind: 'ready' })
        setState({ kind: 'invalid' })
      })
      .catch(() => setState({ kind: 'error', message: 'Could not reach the server.' }))
  }, [token])

  async function confirm() {
    setState({ kind: 'loading' })
    try {
      const res = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) return setState({ kind: 'success' })
      if (data?.reason === 'already_unsubscribed') return setState({ kind: 'already' })
      setState({ kind: 'error', message: data?.error || 'Something went wrong.' })
    } catch {
      setState({ kind: 'error', message: 'Could not reach the server.' })
    }
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-lg px-6 py-24">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
          <h1 className="text-2xl font-semibold">Unsubscribe</h1>
          {state.kind === 'loading' && (
            <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
          )}
          {state.kind === 'ready' && (
            <>
              <p className="mt-4 text-sm text-muted-foreground">
                Click below to stop receiving emails from EnAibleWorks.
              </p>
              <button
                onClick={confirm}
                className="mt-6 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-glow"
              >
                Confirm unsubscribe
              </button>
            </>
          )}
          {state.kind === 'success' && (
            <p className="mt-4 text-sm text-muted-foreground">
              You've been unsubscribed. You won't receive any more emails from us.
            </p>
          )}
          {state.kind === 'already' && (
            <p className="mt-4 text-sm text-muted-foreground">
              This email address is already unsubscribed.
            </p>
          )}
          {state.kind === 'invalid' && (
            <p className="mt-4 text-sm text-muted-foreground">
              This unsubscribe link is invalid or has expired.
            </p>
          )}
          {state.kind === 'error' && (
            <p className="mt-4 text-sm text-destructive">{state.message}</p>
          )}
        </div>
      </section>
    </PageShell>
  )
}
