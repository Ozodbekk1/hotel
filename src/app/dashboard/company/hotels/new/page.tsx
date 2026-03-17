"use client";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewHotelPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Convert tags and amenities from comma-separated strings to arrays
    const rawTags = formData.get("tags") as string;
    const rawAmenities = formData.get("amenities") as string;
    
    const tags = rawTags.split(",").map(t => t.trim()).filter(Boolean);
    const amenities = rawAmenities.split(",").map(t => t.trim()).filter(Boolean);
    
    const payload = {
      name: formData.get("name"),
      slug: (formData.get("name") as string).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      location: formData.get("location"),
      country: formData.get("country"),
      blurb: formData.get("blurb"),
      description: formData.get("description"),
      image: formData.get("image"),
      pricePerNight: Number(formData.get("pricePerNight")),
      tags,
      amenities
    };

    try {
      const res = await fetch("/api/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create property");
      }

      router.push("/dashboard/company");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageShell
      title="Add New Property"
      description="List a new hotel, resort, or lodge on our platform."
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
                <Input id="name" name="name" required placeholder="The Grand Resort & Spa" className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">City / Region</Label>
                <Input id="location" name="location" required placeholder="Miami, Florida" className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" required placeholder="USA" className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="image">Main Image URL</Label>
                <Input id="image" name="image" required type="url" placeholder="https://images.unsplash.com/..." className="h-11 bg-muted/50 text-sm" />
                <p className="text-xs text-muted-foreground mt-1">Provide a high-quality, landscape Unsplash URL</p>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="blurb">Short Blurb (Card description)</Label>
                <Input id="blurb" name="blurb" required placeholder="A stunning oceanfront resort blending art deco..." className="h-11 bg-muted/50" maxLength={150} />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">Full Description</Label>
                <Textarea 
                   id="description" 
                   name="description" 
                   required 
                   placeholder="Detailed paragraphs about the property, rooms, and dining..." 
                   className="min-h-32 bg-muted/50 resize-y" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricePerNight">Base Price per Night ($)</Label>
                <Input id="pricePerNight" name="pricePerNight" type="number" required min="1" placeholder="250" className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" name="tags" placeholder="beach, luxury, spa, new" className="h-11 bg-muted/50" />
              </div>
              
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="amenities">Amenities (comma separated)</Label>
                <Textarea 
                  id="amenities" 
                  name="amenities" 
                  placeholder="Free WiFi, Ocean View, Mini Bar, Room Service, Outdoor Pool" 
                  className="bg-muted/50 min-h-20" 
                />
              </div>

              <div className="sm:col-span-2 pt-4 border-t mt-4 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
                  Cancel
                </Button>
                <Button type="submit" size="lg" disabled={isLoading} className="px-8 shadow-sm">
                  {isLoading ? "Saving..." : "Create Property"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
