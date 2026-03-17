import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfileBookmarksPage() {
  return (
    <PageShell
      title="My Bookmarks"
      description="Template page for saved hotels and articles."
    >
      <Card>
        <CardHeader>
          <CardTitle>Bookmarks</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Persist bookmarks per user (DB) and render a grid of saved items.
        </CardContent>
      </Card>
    </PageShell>
  );
}

