"use client";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditHotelPage() {
  const router = useRouter();
  const params = useParams();
  const hotelId = params.id;
  
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    country: "",
    blurb: "",
    description: "",
    image: "",
    pricePerNight: "",
    tags: "",
    amenities: ""
  });

  useEffect(() => {
    async function fetchHotel() {
      try {
        const res = await fetch(`/api/hotels/${hotelId}`);
        if (!res.ok) throw new Error("Failed to load property");
        
        const data = await res.json();
        setFormData({
            name: data.name || "",
            location: data.location || "",
            country: data.country || "",
            blurb: data.blurb || "",
            description: data.description || "",
            image: data.image || "",
            pricePerNight: data.pricePerNight?.toString() || "",
            tags: data.tags?.join(", ") || "",
            amenities: data.amenities?.join(", ") || ""
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsFetching(false);
      }
    }
    if (hotelId) fetchHotel();
  }, [hotelId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const tags = formData.tags.split(",").map(t => t.trim()).filter(Boolean);
    const amenities = formData.amenities.split(",").map(t => t.trim()).filter(Boolean);
    
    // allow slug update on name change or keep it simple and omit slug update
    const payload = {
      ...formData,
      pricePerNight: Number(formData.pricePerNight),
      tags,
      amenities
    };

    try {
      const res = await fetch(`/api/hotels/${hotelId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update property");
      }

      router.push("/dashboard/company");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  if (isFetching) return <PageShell title="Loading..." description=""><div className="py-20 text-center">Loading property data...</div></PageShell>;

  return (
    <PageShell
      title={`Edit Property`}
      description="Update listing details, pricing, and imagery."
    >
      <div className="max-w-3xl py-6 mx-auto">
        <Card className="border-0 shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl">Property Details</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-6 rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive font-medium">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6 gap-y-5">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="name">Property Name</Label>
                <Input id="name" name="name" required value={formData.name} onChange={handleChange} className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">City / Region</Label>
                <Input id="location" name="location" required value={formData.location} onChange={handleChange} className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" required value={formData.country} onChange={handleChange} className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="image">Main Image URL</Label>
                <Input id="image" name="image" required type="url" value={formData.image} onChange={handleChange} className="h-11 bg-muted/50 text-sm" />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="blurb">Short Blurb (Card description)</Label>
                <Input id="blurb" name="blurb" required value={formData.blurb} onChange={handleChange} className="h-11 bg-muted/50" maxLength={150} />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">Full Description</Label>
                <Textarea id="description" name="description" required value={formData.description} onChange={handleChange} className="min-h-32 bg-muted/50 resize-y" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricePerNight">Base Price per Night ($)</Label>
                <Input id="pricePerNight" name="pricePerNight" type="number" required min="1" value={formData.pricePerNight} onChange={handleChange} className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" name="tags" value={formData.tags} onChange={handleChange} className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="amenities">Amenities (comma separated)</Label>
                <Textarea id="amenities" name="amenities" value={formData.amenities} onChange={handleChange} className="bg-muted/50 min-h-20" />
              </div>

              <div className="sm:col-span-2 pt-4 border-t mt-4 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
                  Cancel
                </Button>
                <Button type="submit" size="lg" disabled={isLoading} className="px-8 shadow-sm">
                  {isLoading ? "Saving..." : "Update Property"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
