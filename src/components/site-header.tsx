import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { cookies } from "next/headers";

type NavItem = { label: string; href: string };
type NavGroup = { label: string; href: string; items?: NavItem[] };

const nav: NavGroup[] = [
  {
    label: "Hotels",
    href: "/hotels",
    items: [
      { label: "All hotels", href: "/hotels" },
      { label: "New hotels", href: "/hotels?tag=new" },
      { label: "City", href: "/hotels?tag=city" },
      { label: "Beach", href: "/hotels?tag=beach" },
      { label: "Mountain", href: "/hotels?tag=mountain" },
      { label: "Well-being", href: "/hotels?tag=wellbeing" },
      { label: "Sustainable", href: "/hotels?tag=sustainable" },
    ],
  },
  {
    label: "Offers",
    href: "/offers",
    items: [
      { label: "Exclusive deals", href: "/offers" },
      { label: "Weekend escapes", href: "/offers/weekend-escape" },
      { label: "Advance purchase", href: "/offers/advance-purchase" },
    ],
  },
  {
    label: "Journal",
    href: "/journal",
    items: [
      { label: "All articles", href: "/journal" },
      { label: "Architecture", href: "/journal?tag=architecture" },
      { label: "Design", href: "/journal?tag=design" },
      { label: "Food", href: "/journal?tag=food" },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
    items: [
      { label: "All guides", href: "/guides" },
      { label: "Paris", href: "/guides/paris" },
      { label: "London", href: "/guides/london" },
      { label: "Portugal", href: "/guides/portugal" },
    ],
  },
  { label: "Store", href: "/store", items: undefined },
  {
    label: "About",
    href: "/about",
    items: [
      { label: "About us", href: "/about" },
      { label: "Sustainability", href: "/about/sustainability" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Travel Pro",
    href: "/travel-pro",
    items: [
      { label: "Overview", href: "/travel-pro" },
      { label: "Register", href: "/travel-pro/register" },
      { label: "Log in", href: "/travel-pro/login" },
    ],
  },
];

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav.map((group) => (
          <NavigationMenuItem key={group.label}>
            {group.items?.length ? (
              <>
                <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[520px] grid-cols-2 gap-2 p-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        className={cn(
                          "rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors",
                          "hover:bg-muted focus:bg-muted",
                        )}
                        href={item.href}
                      >
                        <div className="font-medium">{item.label}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={group.href}
                className="inline-flex h-10 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                {group.label}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] p-0">
        <div className="p-4">
          <Link href="/" className="font-semibold tracking-tight">
            Hotel Collection
          </Link>
        </div>
        <Separator />
        <div className="max-h-[calc(100dvh-64px)] overflow-auto p-2">
          <div className="grid gap-1">
            {nav.flatMap((group) => {
              if (group.items?.length) {
                return [
                  <Link
                    key={group.href}
                    href={group.href}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {group.label}
                  </Link>,
                  ...group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  )),
                ];
              }
              return (
                <Link
                  key={group.href}
                  href={group.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  {group.label}
                </Link>
              );
            })}
          </div>
          <Separator className="my-3" />
          <div className="grid gap-2 px-2">
            <ButtonLink href="/auth/login" variant="secondary">
              Log in
            </ButtonLink>
            <ButtonLink href="/auth/register">Join</ButtonLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

import * as jwt from "jsonwebtoken";

export async function SiteHeader() {
  const cookieStore = await cookies();
  const token = cookieStore.get("refreshToken")?.value;
  
  let userRole = null;
  const isLoggedIn = !!token;
  
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as { userId: string };
      // Getting role might require a DB hit if we didn't put it in refresh token, 
      // but let's check access token first since it has the role
      const accessToken = cookieStore.get("accessToken")?.value;
      if (accessToken) {
         const accessPayload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as { role: string };
         userRole = accessPayload.role;
      }
    } catch (e) {
      // Invalid token
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <div className="flex items-center gap-2 md:hidden">
          <MobileNav />
        </div>

        <Link href="/" className="font-semibold tracking-tight">
          Hotel Collection
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <NavMenu />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ButtonLink
            href="/search"
            variant="ghost"
            size="icon"
            aria-label="Search"
          >
            <Search className="size-5" />
          </ButtonLink>
          {isLoggedIn ? (
            <>
              {userRole === 'admin' && (
                <ButtonLink href="/dashboard/admin" variant="ghost" className="hidden sm:inline-flex text-primary">
                  Admin Hub
                </ButtonLink>
              )}
              {userRole === 'company' && (
                <ButtonLink href="/dashboard/company" variant="ghost" className="hidden sm:inline-flex text-primary">
                  Partner Dashboard
                </ButtonLink>
              )}
              <ButtonLink
                href="/profile"
                variant="ghost"
                className="hidden sm:inline-flex"
              >
                My Profile
              </ButtonLink>
              <form action="/api/auth/logout" method="POST">
                <Button variant="secondary" className="hidden sm:inline-flex" type="submit">
                  Log out
                </Button>
              </form>
            </>
          ) : (
            <>
              <ButtonLink
                href="/auth/login"
                variant="secondary"
                className="hidden sm:inline-flex"
              >
                Log in
              </ButtonLink>
              <ButtonLink href="/auth/register" className="hidden sm:inline-flex">
                Join
              </ButtonLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

