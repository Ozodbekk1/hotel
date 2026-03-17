"use client";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to login");
      }

      // Redirect based on role
      const role = data.user?.role;
      if (role === "admin") {
        router.push("/dashboard/admin");
      } else if (role === "company") {
        router.push("/dashboard/company");
      } else {
        router.push("/profile");
      }
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageShell
      title="Access Your Account"
      description="Sign in to manage your bookings and explore exclusive offers."
    >
      <div className="flex justify-center py-10">
        <Card className="w-full max-w-md shadow-lg border-2">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive font-medium text-center">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="name@example.com" required className="h-11" />
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" placeholder="••••••••" required className="h-11" />
              </div>
              <Button type="submit" size="lg" className="w-full h-11 text-base" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="font-semibold text-primary hover:underline">
                Create one now
              </Link>
            </div>
            <div className="mt-3 text-center text-sm text-muted-foreground">
              Registering a hotel?{" "}
              <Link href="/auth/register?role=company" className="font-semibold text-primary hover:underline">
                Join as a Partner
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
