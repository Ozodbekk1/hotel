import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfileBenefitsPage() {
  return (
    <PageShell
      title="My Benefits"
      description="Template page for membership perks and tier info."
    >
      <Card>
        <CardHeader>
          <CardTitle>Benefits</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add member perks like late checkout, upgrades (when available), and
          exclusive pricing.
        </CardContent>
      </Card>
    </PageShell>
  );
}

