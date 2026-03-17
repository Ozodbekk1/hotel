import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CareersPage() {
  return (
    <PageShell
      title="Careers"
      description="Template careers page. Add roles, benefits, and hiring process."
    >
      <Card>
        <CardHeader>
          <CardTitle>Open roles</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add your job listings integration (Greenhouse, Lever, custom CMS) here.
        </CardContent>
      </Card>
    </PageShell>
  );
}

