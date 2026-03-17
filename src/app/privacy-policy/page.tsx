import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="Template legal page. Replace with your own privacy policy text."
    >
      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-neutral max-w-none text-sm dark:prose-invert">
          <p>
            This is placeholder text. Add your data collection, processing,
            retention, and user rights information here.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}

