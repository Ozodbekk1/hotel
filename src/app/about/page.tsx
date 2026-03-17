import Link from "next/link";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const aboutCards = [
  {
    title: "Sustainability",
    href: "/about/sustainability",
    description: "Learn about initiatives, hotel standards, and impact reporting.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Careers",
    href: "/about/careers",
    description: "Open roles, team culture, and how we work.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About us"
      description="Template about page. Replace with your brand story, mission, and press kit."
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src="/hero.svg"
                alt="About hero"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                <Badge className="glass">Design</Badge>
                <Badge className="glass">Local culture</Badge>
                <Badge className="glass">Independent</Badge>
              </div>
            </div>
            <div className="p-6 text-sm text-muted-foreground">
              Build a premium-feeling hotel brand: editorial, offers, guides, and
              a member area. This UI is intentionally modern—swap the placeholder
              visuals with real photography when ready.
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:col-span-5">
          {aboutCards.map((c) => (
            <Link key={c.href} href={c.href} className="block">
              <Card className="group overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/9]">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {c.description}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

