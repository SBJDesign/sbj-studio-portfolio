import { cn } from "@/lib/cn";

export function CategoryHeading({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("relative mb-6 md:mb-8", className)}>
      <div className="accent-divider mb-4 max-w-xs" />
      <h2 className="text-2xl font-black tracking-tight text-text md:text-3xl">{children}</h2>
    </div>
  );
}
