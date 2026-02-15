import { cn } from "@/lib/utils";

export function navLinkClass(active: boolean) {
  return cn(
    "text-sm transition-colors",
    active ? "text-white" : "text-white/70 hover:text-white",
  );
}
