"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TimelineItem } from "@/data/about";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function VerticalTimeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{
    src: string;
    alt: string;
    title?: string;
  } | null>(null);

  function onOpenImage(item: TimelineItem) {
    setActive({ src: item.imageSrc, alt: item.imageAlt, title: item.title });
    setOpen(true);
  }

  return (
    <div className={cn("relative", className)}>
      {/* garis vertikal */}
      <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-6" />

      <ul className="space-y-6">
        {items.map((item) => (
          <li
            key={`${item.title}-${item.period}`}
            className="relative pl-14 md:pl-16"
          >
            {/* node image (clickable) */}
            <div className="absolute left-0 top-1">
              <button
                type="button"
                onClick={() => onOpenImage(item)}
                className="group h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-12 md:w-12"
                aria-label={`Open image for ${item.title}`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </button>
            </div>

            {/* content */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-white/90 md:text-base">
                    {item.title}
                  </p>
                  {item.subtitle ? (
                    <p className="mt-0.5 text-xs text-white/60 md:text-sm">
                      {item.subtitle}
                    </p>
                  ) : null}
                </div>
                <p className="text-xs text-white/55 md:text-sm">
                  {item.period}
                </p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        {/* DialogTitle wajib untuk aksesibilitas, tapi bisa hidden */}
        <DialogTitle className="sr-only">
          {active?.title ?? "Image preview"}
        </DialogTitle>

        <DialogContent className="border-white/10 bg-[#121212] p-0 sm:max-w-[720px]">
          <div className="relative aspect-square w-full sm:aspect-[4/3]">
            {active ? (
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 720px"
                priority
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
