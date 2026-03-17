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
        "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12",
        className
      )}
    >
      <div className="mb-6 space-y-2 sm:mb-8">
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-3xl text-pretty text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

