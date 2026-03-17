"use client";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const [hotel, setHotel] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingHotel, setLoadingHotel] = useState(true);

  // Availability states
  const [availability, setAvailability] = useState<"idle" | "checking" | "available" | "unavailable">("idle");

  // Form states
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    async function fetchHotel() {
      try {
        const res = await fetch(`/api/hotels?tag=all`);
        const allHotels = await res.json();
        const found = allHotels.find((h: any) => h.slug === params.slug);
        if (found) setHotel(found);
      } catch (err) {
        console.error("Failed to load hotel", err);
      } finally {
        setLoadingHotel(false);
      }
    }
    fetchHotel();
  }, [params.slug]);

  // Check availability whenever both dates are set
  useEffect(() => {
    if (!checkIn || !checkOut || !hotel?._id) {
      setAvailability("idle");
      return;
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      setAvailability("idle");
      return;
    }

    let cancelled = false;
    setAvailability("checking");

    (async () => {
      try {
        const res = await fetch(
          `/api/hotels/${hotel._id}/availability?checkIn=${checkIn}&checkOut=${checkOut}`
        );
        const data = await res.json();
        if (!cancelled) {
          setAvailability(data.available ? "available" : "unavailable");
        }
      } catch {
        if (!cancelled) setAvailability("idle");
      }
    })();

    return () => { cancelled = true; };
  }, [checkIn, checkOut, hotel?._id]);

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const days = calculateDays();
  const basePrice = (hotel?.pricePerNight || 150) * days;
  const taxes = basePrice * 0.1;
  const totalPrice = basePrice + taxes;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hotel) return;
    if (days <= 0) { setError("Please select a valid check-out date after check-in"); return; }
    if (availability === "unavailable") { setError("Hotel is not available for the selected dates."); return; }

    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hotelId: hotel._id, checkIn, checkOut, guests, totalPrice }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          router.push(`/auth/login?redirect=/hotels/${params.slug}/book`);
          return;
        }
        throw new Error(data.error || "Failed to book");
      }

      router.push("/profile/bookings?success=true");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  if (loadingHotel) return (
    <PageShell title="Loading..." description="Fetching hotel details">
      <div className="py-20 text-center text-muted-foreground">Loading hotel details…</div>
    </PageShell>
  );
  if (!hotel) return (
    <PageShell title="Not Found" description="Could not load hotel.">
      <div className="py-20 text-center text-muted-foreground">Failed to load hotel data.</div>
    </PageShell>
  );

  const canSubmit = days > 0 && availability !== "unavailable" && availability !== "checking";

  return (
    <PageShell title="Book your stay" description={`Reserve your room at ${hotel.name}`}>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto py-6">

        <div className="md:col-span-2">
          <Card className="shadow-md border-0 bg-card rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Your Details</CardTitle>
              <CardDescription>Enter your travel dates and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-6 rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive font-medium">
                  {error}
                </div>
              )}
              <form id="booking-form" onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Check-in Date</Label>
                  <Input
                    type="date"
                    id="checkIn"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="h-12 bg-muted/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Check-out Date</Label>
                  <Input
                    type="date"
                    id="checkOut"
                    required
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="h-12 bg-muted/50"
                  />
                </div>

                {/* Availability indicator */}
                {availability !== "idle" && (
                  <div className={`sm:col-span-2 flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium ${
                    availability === "checking"
                      ? "bg-muted text-muted-foreground"
                      : availability === "available"
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-destructive/10 text-destructive border border-destructive/20"
                  }`}>
                    {availability === "checking" && <Loader2 className="size-4 animate-spin" />}
                    {availability === "available" && <CheckCircle className="size-4" />}
                    {availability === "unavailable" && <XCircle className="size-4" />}
                    {availability === "checking" && "Checking availability…"}
                    {availability === "available" && "Great news! Hotel is available for your dates."}
                    {availability === "unavailable" && "Sorry, hotel is already booked for those dates. Please choose different dates."}
                  </div>
                )}

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <select
                    id="guests"
                    className="flex h-12 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="rounded-3xl shadow-sm bg-primary/5 sticky top-24 border-0">
            <CardHeader className="pb-4 border-b border-primary/10">
              <CardTitle className="text-xl">{hotel.name}</CardTitle>
              <CardDescription className="text-xs pt-1">{hotel.location} · {hotel.country}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{hotel.pricePerNight || 150} × {days} nights</span>
                <span className="font-medium">${basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taxes & fees</span>
                <span className="font-medium">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-primary/10 pt-4 mt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Button
                type="submit"
                form="booking-form"
                size="lg"
                className="w-full text-base font-semibold h-12 mt-4 shadow-md"
                disabled={isLoading || !canSubmit}
              >
                {isLoading ? "Confirming…" : availability === "unavailable" ? "Dates Unavailable" : "Confirm Reservation"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">You won&apos;t be charged yet</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </PageShell>
  );
}
