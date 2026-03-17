"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";

import { ButtonLink } from "@/components/button-link";
import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type DateRange = { from?: Date; to?: Date };

export function SearchCapsule({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "hero";
}) {
  const isHero = variant === "hero";
  const [destination, setDestination] = React.useState("");
  const [range, setRange] = React.useState<DateRange>({});
  const [guests, setGuests] = React.useState("2");
  const [promo, setPromo] = React.useState("");

  const label =
    range.from && range.to
      ? `${format(range.from, "MMM d")} – ${format(range.to, "MMM d")}`
      : range.from
        ? format(range.from, "MMM d")
        : "Check-in – Check-out";

  return (
    <div
      className={cn(
        "w-full rounded-3xl border p-3 backdrop-blur supports-backdrop-filter:bg-background/60 sm:p-4",
        isHero
          ? "border-white/10 bg-black/20 shadow-none text-white"
          : "bg-card/60 glass",
        className
      )}
    >
      <form
        className={cn(
          "grid w-full grid-cols-1 gap-3",
          isHero
            ? "sm:grid-cols-2"
            : "sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:items-center"
        )}
        onSubmit={(e) => {
          e.preventDefault();
          toast("Search submitted", {
            description:
              "This demo uses mock data. Wire this form to your API/CMS when ready.",
            action: { label: "Go to results", onClick: () => {} },
          });
        }}
      >
        <div
          className={cn(
            isHero ? "sm:col-span-2" : "sm:col-span-2 md:col-span-4 lg:col-span-3"
          )}
        >
          <label className="sr-only" htmlFor="destination">
            Destination
          </label>
          <Input
            id="destination"
            placeholder="Search destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={cn(
              "h-12",
              isHero &&
                "border-white/15 bg-white/10 text-white placeholder:text-white/60 focus-visible:border-white/30 focus-visible:ring-white/20"
            )}
          />
        </div>

        <div
          className={cn(
            isHero ? "sm:col-span-2" : "sm:col-span-2 md:col-span-4 lg:col-span-3"
          )}
        >
          <Popover>
            <PopoverTrigger
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 w-full min-w-0 justify-start text-left font-normal",
                !range.from && "text-muted-foreground",
                isHero &&
                  "border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white focus-visible:border-white/30 focus-visible:ring-white/20"
              )}
            >
              <CalendarIcon className="mr-2 size-4" />
              <span className="truncate">{label}</span>
            </PopoverTrigger>
            <PopoverContent
              className="w-[calc(100vw-2rem)] max-w-sm p-0 max-h-[70dvh] overflow-auto sm:w-auto sm:max-w-none sm:max-h-none"
              align="start"
            >
              <Calendar
                mode="range"
                numberOfMonths={2}
                className="hidden sm:block"
                selected={{ from: range.from, to: range.to }}
                onSelect={(r) => setRange({ from: r?.from, to: r?.to })}
              />
              <Calendar
                mode="range"
                numberOfMonths={1}
                className="block sm:hidden"
                selected={{ from: range.from, to: range.to }}
                onSelect={(r) => setRange({ from: r?.from, to: r?.to })}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div
          className={cn(
            isHero ? "sm:col-span-1" : "sm:col-span-1 md:col-span-2 lg:col-span-2"
          )}
        >
          <Select
            value={guests}
            onValueChange={(v) => setGuests(v ?? "2")}
          >
            <SelectTrigger
              className={cn(
                "h-12 w-full",
                isHero &&
                  "border-white/15 bg-white/10 text-white focus:border-white/30 focus:ring-white/20"
              )}
            >
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 adult</SelectItem>
              <SelectItem value="2">2 adults</SelectItem>
              <SelectItem value="3">3 adults</SelectItem>
              <SelectItem value="4">4 adults</SelectItem>
              <SelectItem value="2+kids">2 adults + kids</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          className={cn(
            isHero ? "sm:col-span-1" : "sm:col-span-1 md:col-span-2 lg:col-span-2"
          )}
        >
          <label className="sr-only" htmlFor="promo">
            Promo code
          </label>
          <Input
            id="promo"
            placeholder="Promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            className={cn(
              "h-12",
              isHero &&
                "border-white/15 bg-white/10 text-white placeholder:text-white/60 focus-visible:border-white/30 focus-visible:ring-white/20"
            )}
          />
        </div>

        <div
          className={cn(
            isHero ? "sm:col-span-2" : "sm:col-span-2 md:col-span-4 lg:col-span-2"
          )}
        >
          <ButtonLink
            className="h-12 w-full"
            href={{
              pathname: "/search",
              query: {
                destination,
                guests,
                promo,
                from: range.from?.toISOString(),
                to: range.to?.toISOString(),
              },
            }}
          >
            Search
          </ButtonLink>
        </div>
      </form>
    </div>
  );
}
