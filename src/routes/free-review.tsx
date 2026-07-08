import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/free-review")({
  beforeLoad: () => {
    throw redirect({ to: "/enableme", statusCode: 301 });
  },
});
