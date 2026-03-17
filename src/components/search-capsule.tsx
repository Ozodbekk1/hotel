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
        "w-full rounded-3xl border p-3 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/60 sm:p-4",
        variant === "hero"
          ? "glass bg-card/40 shadow-black/10"
          : "bg-card/60 glass",
        className
      )}
    >
      <form
        className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 lg:items-center"
        onSubmit={(e) => {
          e.preventDefault();
          toast("Search submitted", {
            description:
              "This demo uses mock data. Wire this form to your API/CMS when ready.",
            action: { label: "Go to results", onClick: () => {} },
          });
        }}
      >
        <div className="sm:col-span-2 md:col-span-4 lg:col-span-3">
          <label className="sr-only" htmlFor="destination">
            Destination
          </label>
          <Input
            id="destination"
            placeholder="Search destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Popover>
            <PopoverTrigger
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 w-full justify-start text-left font-normal",
                !range.from && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 size-4" />
              {label}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                numberOfMonths={1}
                className="hidden sm:block"
                selected={{ from: range.from, to: range.to }}
                onSelect={(r) => setRange({ from: r?.from, to: r?.to })}
              />
              <Calendar
                mode="range"
                numberOfMonths={2}
                className="block sm:hidden"
                selected={{ from: range.from, to: range.to }}
                onSelect={(r) => setRange({ from: r?.from, to: r?.to })}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="sm:col-span-1 md:col-span-2 lg:col-span-2">
          <Select
            value={guests}
            onValueChange={(v) => setGuests(v ?? "2")}
          >
            <SelectTrigger className="h-12 w-full">
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

        <div className="sm:col-span-1 md:col-span-2 lg:col-span-2">
          <label className="sr-only" htmlFor="promo">
            Promo code
          </label>
          <Input
            id="promo"
            placeholder="Promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
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

