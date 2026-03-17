import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <PageShell
      title="Terms & Conditions"
      description="Template legal page. Replace with your own terms."
    >
      <Card>
        <CardHeader>
          <CardTitle>Terms</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-neutral max-w-none text-sm dark:prose-invert">
          <p>
            This is placeholder text. Add booking terms, liability, refunds, and
            other policies here.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}

