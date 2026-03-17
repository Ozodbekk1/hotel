import { PageShell } from "@/components/page-shell";
import { ButtonLink } from "@/components/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StorePage() {
  return (
    <PageShell
      title="Store"
      description="Template store page. Add products, checkout, and fulfillment integrations."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Designed to Stay (Book)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            A placeholder product card.
            <div>
              <ButtonLink href="/store" size="sm">
                View product
              </ButtonLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}

