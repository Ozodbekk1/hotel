import Image from "next/image";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/page-shell";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hotels } from "@/lib/mock-data";
import dbConnect from "@/lib/dbConnect";
import Hotel from "@/models/Hotel";
import { Suspense } from "react";

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await dbConnect();
  const dbHotel = await Hotel.findOne({ slug }).lean();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let hotel: any;

  if (dbHotel) {
    hotel = {
      _id: dbHotel._id.toString(),
      slug: dbHotel.slug,
      name: dbHotel.name,
      location: dbHotel.location,
      country: dbHotel.country,
      tags: dbHotel.tags,
      blurb: dbHotel.blurb,
      description: dbHotel.description,
      image: dbHotel.image,
      images: dbHotel.images,
      pricePerNight: dbHotel.pricePerNight,
      rating: dbHotel.rating,
      amenities: dbHotel.amenities,
    };
  } else {
    hotel = hotels.find((h) => h.slug === slug);
  }

  if (!hotel) notFound();

  return (
    <PageShell
      title={hotel.name}
      description={
        <span className="flex items-center gap-2">
          {hotel.location} · {hotel.country}
          {hotel.rating > 0 && (
             <span className="flex items-center gap-1 font-medium bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-md ml-2">
                 ★ {hotel.rating}
             </span>
          )}
        </span>
      }
    >
      <div className="mb-6 overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="relative aspect-21/9">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent" />
          
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 items-center">
              {hotel.tags.slice(0, 5).map((t: string) => (
                <Badge key={t} className="glass">
                  {t}
                </Badge>
              ))}
              {hotel.pricePerNight > 0 && (
                <Badge className="bg-primary/90 text-primary-foreground font-semibold px-3 py-1 shadow-md border-0 ml-2">
                  ${hotel.pricePerNight} / night
                </Badge>
              )}
            </div>
            <div className="flex gap-2">
              <ButtonLink href={`/hotels/${hotel.slug}/book`} size="sm" className="shadow-sm">
                View & book
              </ButtonLink>
              <ButtonLink href="/hotels" variant="secondary" size="sm" className="glass">
                Back
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {hotel.description || hotel.blurb || "No detailed description provided."}
              </div>
              
              {hotel.amenities && hotel.amenities.length > 0 && (
                 <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm text-muted-foreground">
                        {hotel.amenities.map((amenity: string, i: number) => (
                          <div key={i} className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-primary">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                            </svg>
                            {amenity}
                          </div>
                        ))}
                    </div>
                 </div>
              )}

              <div className="flex flex-wrap gap-2 pt-4">
                {hotel.tags.map((t: string) => (
                  <Badge key={t} variant="secondary" className="glass">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="rounded-3xl border-0 shadow-sm bg-primary/5">
            <CardHeader>
              <CardTitle>Reserve your stay</CardTitle>
              {hotel.pricePerNight > 0 && (
                <div className="text-3xl font-bold tracking-tight mt-2">
                  ${hotel.pricePerNight} <span className="text-base font-normal text-muted-foreground">/ night</span>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <ButtonLink href={`/hotels/${hotel.slug}/book`} size="lg" className="w-full text-base font-semibold h-12 shadow-md">
                Book Now
              </ButtonLink>
              <div className="text-center text-xs opacity-70">
                You won&apos;t be charged yet
              </div>
              <div className="border-t pt-4 mt-2 space-y-2">
                <div className="flex justify-between">
                   <span className="font-medium text-foreground">Location:</span>{" "}
                   <span className="text-right">{hotel.location}</span>
                </div>
                <div className="flex justify-between">
                   <span className="font-medium text-foreground">Country:</span>{" "}
                   <span className="text-right">{hotel.country}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
