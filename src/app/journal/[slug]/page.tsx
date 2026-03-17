import Image from "next/image";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/page-shell";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from "@/lib/mock-data";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <PageShell title={article.title} description={`${article.category} · ${article.date}`}>
      <div className="mb-6 overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="relative aspect-[21/9]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <Badge className="glass">{article.category}</Badge>
              <Badge className="glass">{article.date}</Badge>
            </div>
            <div className="flex gap-2">
              <ButtonLink href="/journal" variant="secondary" size="sm" className="glass">
                Back
              </ButtonLink>
              <ButtonLink href="/hotels" size="sm">
                Browse hotels
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Article</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral max-w-none dark:prose-invert">
              <p>{article.excerpt}</p>
              <p>
                This is a template. Replace with MDX or CMS-rendered content for
                real articles.
              </p>
              <h3>Suggested structure</h3>
              <ul>
                <li>Hero image + intro</li>
                <li>Body sections</li>
                <li>Related hotels / destinations</li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/journal" variant="secondary">
              Back to journal
            </ButtonLink>
            <ButtonLink href="/hotels">Browse hotels</ButtonLink>
          </div>
        </div>
        <div className="space-y-4">
          <Card className="rounded-3xl glass">
            <CardHeader>
              <CardTitle>Related</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Add related tags, destinations, and hotel cards here.
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}

