import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 py-6 px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="size-4" />
          <span>Next.js Starter Kit</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Built with Next.js, TailwindCSS v4, and shadcn/ui
        </p>
      </div>
    </footer>
  );
}
