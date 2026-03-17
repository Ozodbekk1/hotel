import Link from "next/link";

const footerLinks: Array<{ label: string; href: string }> = [
  { label: "Contact", href: "/contact" },
  { label: "Cancel booking", href: "/cancel-booking" },
  { label: "Careers", href: "/about/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Impressum", href: "/impressum" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookie settings", href: "/cookie-settings" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t bg-muted/15 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-primary/45 before:to-transparent">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-tight text-brand">
            Hotel Collection
          </div>
          <p className="text-sm text-muted-foreground">
            Demo UI built with Next.js + shadcn/ui. Replace copy, images, and
            data with your own brand assets.
          </p>
          <div className="pt-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 glass">
              <span className="size-1.5 rounded-full bg-primary" />
              Modern UI starter
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:col-span-2 md:grid-cols-3">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Hotel Collection</div>
          <div>Built for your own hotel directory brand.</div>
        </div>
      </div>
    </footer>
  );
}
