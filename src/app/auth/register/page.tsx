"use client";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";
import { Building2, User } from "lucide-react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Role can be toggled directly on the page (no URL param needed)
  const [role, setRole] = useState<"user" | "company">(
    searchParams.get("role") === "company" ? "company" : "user"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email");
    const password = formData.get("password");
    const name = `${firstName} ${lastName}`.trim();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to register");

      router.push("/auth/login?registered=true");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageShell
      title="Create Your Account"
      description="Join as a guest or register your property as a partner."
    >
      <div className="flex justify-center py-10">
        <Card className="w-full max-w-md shadow-lg border-2">
          <CardHeader className="text-center space-y-4 pb-2">
            <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>

            {/* Role Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-muted">
              <button
                type="button"
                onClick={() => setRole("user")}
                className={`flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-sm font-medium transition-all ${
                  role === "user"
                    ? "bg-card shadow text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="size-4" />
                I&apos;m a Customer
              </button>
              <button
                type="button"
                onClick={() => setRole("company")}
                className={`flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-sm font-medium transition-all ${
                  role === "company"
                    ? "bg-card shadow text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="size-4" />
                I&apos;m a Hotel Owner
              </button>
            </div>

            <CardDescription className="text-xs">
              {role === "company"
                ? "✓ You'll be able to list and manage your properties after sign-up."
                : "✓ Browse, book, and manage reservations with ease."}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            {error && (
              <div className="mb-4 rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive font-medium text-center">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" placeholder="John" required className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required className="h-11" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@example.com" required className="h-11" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="••••••••" required className="h-11" minLength={8} />
              </div>
              <Button type="submit" size="lg" className="w-full h-11 text-base" disabled={isLoading}>
                {isLoading ? "Creating Account..." : `Create ${role === "company" ? "Partner" : "Guest"} Account`}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
