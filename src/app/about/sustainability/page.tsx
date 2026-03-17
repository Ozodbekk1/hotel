import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SustainabilityPage() {
  return (
    <PageShell
      title="Sustainability"
      description="Template for sustainability commitments and reporting."
    >
      <Card>
        <CardHeader>
          <CardTitle>Our approach</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add your sustainability framework, partner standards, and measurable
          goals here.
        </CardContent>
      </Card>
    </PageShell>
  );
}

