import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Template contact page. Wire to your support/helpdesk."
    >
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Send a message</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Button>Submit</Button>
        </CardContent>
      </Card>
    </PageShell>
  );
}

