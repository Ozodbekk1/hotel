import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookieSettingsPage() {
  return (
    <PageShell
      title="Cookie settings"
      description="Template cookie preferences page. Hook this up to your consent manager."
    >
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add toggles for analytics/marketing cookies and persist consent to a
          cookie or server-side preference store.
        </CardContent>
      </Card>
    </PageShell>
  );
}

