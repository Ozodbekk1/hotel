import * as React from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  title,
  description,
  children,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12",
        className
      )}
    >
      <div className="relative mb-6 overflow-hidden rounded-3xl border p-6 glass sm:mb-8">
        <div className="pointer-events-none absolute inset-x-0 -top-6 h-56 opacity-70 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
          <div className="h-full w-full bg-grid opacity-25" />
        </div>

        <div className="relative space-y-2">
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-brand sm:text-3xl md:text-4xl">
          {title}
          </h1>
          {description ? (
            <p className="max-w-3xl text-pretty text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
