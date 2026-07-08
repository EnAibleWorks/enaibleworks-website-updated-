import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { BrandName } from "./BrandName";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-start gap-16 md:grid-cols-4 md:gap-12">
          <div className="flex flex-col items-start md:col-span-2 md:max-w-md">
            <Logo variant="footer" />
            <p className="mt-5 max-w-md text-base font-normal normal-case leading-relaxed tracking-normal text-muted-foreground">
              A trusted local partner helping hardworking business owners save time,
              attract more customers, and take the stress out of technology.
            </p>
            <p className="mt-5 max-w-md text-base font-normal normal-case leading-relaxed tracking-normal text-muted-foreground">
              Focus on your business. We'll help make technology{" "}
              <span style={{ color: "var(--electric)" }} className="font-medium">
                work for it.
              </span>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="mt-6 space-y-4 text-base text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Solutions</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Get in touch</h4>
            <ul className="mt-6 space-y-4 text-base text-muted-foreground">
              <li>info@enaibleworks.com</li>
              <li>732-778-8816</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-10 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} <BrandName />. All rights reserved.</p>
          <p>Built to help local businesses succeed.</p>
        </div>
      </div>
    </footer>
  );
}
