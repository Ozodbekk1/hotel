import Link from "next/link";
import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from "@/lib/mock-data";

export default async function JournalPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const filtered = tag
    ? articles.filter((a) => a.category.toLowerCase() === tag.toLowerCase())
    : articles;

  return (
    <PageShell
      title="Journal"
      description="Stories, people, and trends. Mock content for your editorial section."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {["all", "Design", "Architecture", "Food", "Originals"].map((t) => (
          <Link
            key={t}
            href={t === "all" ? "/journal" : `/journal?tag=${t}`}
            className="inline-flex"
          >
            <Badge
              variant={
                (t === "all" ? undefined : t) === (tag ?? undefined)
                  ? "default"
                  : "secondary"
              }
            >
              {t}
            </Badge>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((a) => (
          <Link key={a.slug} href={`/journal/${a.slug}`} className="block">
            <Card className="group h-full overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <div className="absolute left-3 top-3">
                  <Badge className="glass">{a.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{a.title}</CardTitle>
                <div className="text-xs text-muted-foreground">{a.date}</div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="line-clamp-3">{a.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

