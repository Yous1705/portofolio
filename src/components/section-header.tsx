import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 mx-w-2xl text-sm leading-relaxed text-white/65">
          {description}
        </p>
      ) : null}
    </div>
  );
}
