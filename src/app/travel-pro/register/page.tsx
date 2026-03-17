import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function TravelProRegisterPage() {
  return (
    <PageShell
      title="Travel Pro — Register"
      description="Template registration form (wire to your auth provider)."
    >
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Email" />
          <Input placeholder="Agency name" />
          <Input placeholder="IATA / TIDS (optional)" />
          <Button>Create account</Button>
          <ButtonLink href="/travel-pro/login" variant="secondary">
            Already have an account?
          </ButtonLink>
        </CardContent>
      </Card>
    </PageShell>
  );
}

