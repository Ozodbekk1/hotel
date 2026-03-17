import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CancelBookingPage() {
  return (
    <PageShell
      title="Cancel booking"
      description="Template cancellation flow. Connect to your booking provider."
    >
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Find your reservation</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Booking reference" />
          <Input placeholder="Email used for booking" />
          <Button>Continue</Button>
        </CardContent>
      </Card>
    </PageShell>
  );
}

