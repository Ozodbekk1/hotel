import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function TravelProLoginPage() {
  return (
    <PageShell
      title="Travel Pro — Log in"
      description="Template login form (wire to your auth provider)."
    >
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Log in</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button>Log in</Button>
          <ButtonLink href="/travel-pro/register" variant="secondary">
            Create a Travel Pro account
          </ButtonLink>
        </CardContent>
      </Card>
    </PageShell>
  );
}

