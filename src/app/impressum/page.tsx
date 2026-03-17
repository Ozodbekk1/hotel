import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImpressumPage() {
  return (
    <PageShell
      title="Impressum"
      description="Template imprint page. Replace with your business details."
    >
      <Card>
        <CardHeader>
          <CardTitle>Company information</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add registered address, legal entity name, VAT info, and contact
          details here.
        </CardContent>
      </Card>
    </PageShell>
  );
}

