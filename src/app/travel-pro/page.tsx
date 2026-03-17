import { PageShell } from "@/components/page-shell";
import { ButtonLink } from "@/components/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TravelProPage() {
  return (
    <PageShell
      title="Travel Pro"
      description="Template for a travel professional portal (rates, bookings, benefits)."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              This section is a starting point. Add authentication + role-based
              access and connect to your booking/rates service.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/travel-pro/register">Register</ButtonLink>
              <ButtonLink href="/travel-pro/login" variant="secondary">
                Log in
              </ButtonLink>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Business travel rate</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Add rate rules, eligibility, and a dedicated search funnel.
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}

