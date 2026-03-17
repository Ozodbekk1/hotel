"use client";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CompanyDashboard() {
  const router = useRouter();
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHotels() {
      try {
        const res = await fetch("/api/company/hotels");
        if (!res.ok) {
           if (res.status === 401 || res.status === 403) {
             router.push("/auth/login?redirect=/dashboard/company");
             return;
           }
           throw new Error("Failed to fetch hotels");
        }
        const data = await res.json();
        setHotels(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchHotels();
  }, [router]);

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this hotel? This action cannot be undone.")) return;
    
    try {
      const res = await fetch(`/api/hotels/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete hotel");
      setHotels(prev => prev.filter(h => h._id !== id));
    } catch (e) {
      alert("Could not delete hotel");
    }
  }

  return (
    <PageShell
      title="Partner Dashboard"
      description="Manage your properties and view bookings."
    >
      <div className="flex justify-between items-center mb-6">
         <h2 className="text-xl font-bold">Your Properties</h2>
         <ButtonLink href="/dashboard/company/hotels/new">Add New Property</ButtonLink>
      </div>

      {loading ? (
        <div className="py-12 text-center text-muted-foreground">Loading your properties...</div>
      ) : error ? (
        <Card className="border-destructive bg-destructive/10">
          <CardContent className="p-6 text-destructive">{error}</CardContent>
        </Card>
      ) : hotels.length === 0 ? (
        <Card className="rounded-3xl border-0 shadow-sm text-center py-12 bg-card">
          <CardHeader>
             <CardTitle className="text-xl">No Properties Yet</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground max-w-sm mx-auto">
            You haven&apos;t added any properties to our platform yet. Add your first hotel to start receiving bookings today.
            <div className="mt-6">
               <ButtonLink href="/dashboard/company/hotels/new" size="lg">Add Property</ButtonLink>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {hotels.map((h) => (
            <Card key={h._id} className="overflow-hidden flex flex-col md:flex-row gap-0 rounded-3xl border-0 shadow-sm bg-card transition-all hover:shadow-md">
              <div className="relative w-full md:w-64 h-56 md:h-auto shrink-0 bg-muted">
                <Image 
                  src={h.image} 
                  alt={h.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl font-bold mb-1">{h.name}</CardTitle>
                    <CardDescription>{h.location} · {h.country}</CardDescription>
                  </div>
                  {h.pricePerNight > 0 && (
                     <Badge variant="secondary" className="text-sm px-3 py-1 font-semibold">${h.pricePerNight} / night</Badge>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                   {h.blurb || "No description provided."}
                </p>

                <div className="mt-auto pt-4 border-t flex items-center justify-between">
                  <div className="flex gap-2">
                     <ButtonLink href={`/hotels/${h.slug}`} variant="ghost" size="sm">View Public</ButtonLink>
                  </div>
                  <div className="flex gap-2">
                    <ButtonLink 
                      href={`/dashboard/company/hotels/${h._id}/edit`} 
                      variant="outline"
                      size="sm"
                    >
                      Edit 
                    </ButtonLink>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(h._id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </PageShell>
  );
}
