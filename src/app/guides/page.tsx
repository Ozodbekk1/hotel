import Link from "next/link";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guides } from "@/lib/mock-data";

export default function GuidesPage() {
  return (
    <PageShell
      title="Guides"
      description="Destination guides template. Use slugs like /guides/paris."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="block">
            <Card className="group h-full overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge className="glass">Guide</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{g.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {g.excerpt}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

