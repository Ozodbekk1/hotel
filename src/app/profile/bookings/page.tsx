"use client";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

type BookingItem = {
  id: string;
  hotel: {
    name: string;
    location: string;
    image: string;
  };
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: string;
};

export default function ProfileBookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch("/api/bookings");
        if (!res.ok) {
          if (res.status === 401) {
             router.push("/auth/login?redirect=/profile/bookings");
             return;
          }
          throw new Error("Failed to fetch bookings");
        }
        
        const data = await res.json();
        const formatted = data.map((b: any) => ({
          id: b._id,
          hotel: {
            name: b.hotelId?.name || 'Unknown Hotel',
            location: b.hotelId?.location || 'Unknown Location',
            image: b.hotelId?.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          },
          checkIn: b.checkIn,
          checkOut: b.checkOut,
          guests: b.guests,
          totalPrice: b.totalPrice,
          status: b.status,
        }));
        
        setBookings(formatted);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, [router]);

  async function handleCancel(id: string) {
    if (!confirm("Are you sure you want to cancel this booking?")) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "cancelled" })
      });
      if (!res.ok) throw new Error("Failed to cancel booking");
      
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: "cancelled" } : b));
    } catch (e) {
      alert("Could not cancel booking");
    }
  }

  return (
    <PageShell
      title="My Bookings"
      description="View your upcoming and past reservations."
    >
      {loading ? (
        <div className="py-20 text-center">Loading bookings...</div>
      ) : error ? (
        <Card className="border-destructive bg-destructive/10">
          <CardContent className="p-6 text-destructive">{error}</CardContent>
        </Card>
      ) : bookings.length === 0 ? (
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader>
             <CardTitle className="text-xl">No Bookings Found</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground pb-8">
            You haven&apos;t made any reservations yet. 
            <div className="mt-4">
               <Button onClick={() => router.push("/hotels")}>Browse Hotels</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {bookings.map((b) => (
            <Card key={b.id} className="overflow-hidden flex flex-col md:flex-row gap-0 rounded-3xl border-0 shadow-sm bg-card hover:shadow-md transition-shadow">
              <div className="relative w-full md:w-64 h-56 md:h-auto shrink-0 bg-muted">
                <Image 
                  src={b.hotel.image} 
                  alt={b.hotel.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center gap-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold">{b.hotel.name}</CardTitle>
                    <CardDescription className="text-sm">{b.hotel.location}</CardDescription>
                  </div>
                  <Badge 
                     variant={b.status === 'confirmed' ? "default" : b.status === 'cancelled' ? "destructive" : "secondary"}
                     className={`px-3 py-1 font-semibold ${b.status === 'confirmed' ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
                  >
                     {b.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Check-in</span>
                    <span className="font-medium text-base">{format(new Date(b.checkIn), "MMM d, yyyy")}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Check-out</span>
                    <span className="font-medium text-base">{format(new Date(b.checkOut), "MMM d, yyyy")}</span>
                  </div>
                  <div className="border-t pt-3">
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Guests</span>
                    <span className="font-medium">{b.guests}</span>
                  </div>
                  <div className="border-t pt-3">
                     <span className="text-muted-foreground block text-xs uppercase tracking-wider mb-1">Total Due</span>
                     <span className="font-bold text-lg tracking-tight">${b.totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {b.status === 'confirmed' && new Date(b.checkIn) > new Date() && (
                  <div className="mt-6 pt-4 border-t flex justify-end">
                    <Button 
                      variant="outline" 
                      onClick={() => handleCancel(b.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
                    >
                      Cancel Booking
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </PageShell>
  );
}
