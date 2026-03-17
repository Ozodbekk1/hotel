import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

const sections = [
  { label: "My Bookings", description: "View and manage reservations", href: "/profile/bookings" },
  { label: "My Benefits", description: "Exclusive member perks", href: "/profile/benefits" },
  { label: "My Bookmarks", description: "Saved places and guides", href: "/profile/bookmarks" },
];

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('refreshToken')?.value;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let user: any = null;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as { userId: string };
      await dbConnect();
      user = await User.findById(decoded.userId).select("-password").lean();
    } catch (e) {
      console.error("Token verification failed", e);
    }
  }

  return (
    <PageShell
      title="My Profile"
      description="Manage your account, bookings, and preferences."
    >
      {user ? (
        <Card className="mb-8 rounded-3xl border-0 shadow-sm bg-primary/5">
          <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 text-center sm:text-left space-y-1">
              <h2 className="text-2xl font-bold tracking-tight flex items-center justify-center sm:justify-start gap-3">
                {user.name}
                <Badge variant="secondary" className="glass py-0.5">{user.role}</Badge>
              </h2>
              <p className="text-muted-foreground">{user.email}</p>
              <p className="text-xs text-muted-foreground/70 pt-1">Member since {new Date(user.createdAt).getFullYear()}</p>
            </div>
            
            {(user.role === 'admin' || user.role === 'company') && (
               <Link href={`/dashboard/${user.role}`} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 shrink-0 mt-4 sm:mt-0 shadow-md">
                 Open Dashboard
               </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-8 border-destructive bg-destructive/5 rounded-3xl">
           <CardContent className="p-6">
             You are not authenticated. Please <Link href="/auth/login" className="font-semibold hover:underline text-primary">log in</Link>.
           </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="block group">
            <Card className="h-full border-0 shadow-sm rounded-3xl bg-card transition-all group-hover:-translate-y-1 group-hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{s.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {s.description}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
