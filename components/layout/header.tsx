import Link from "next/link";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-6">
        <div className="flex items-center gap-2 mr-6">
          <Code2 className="size-5 text-primary" />
          <Link
            href="/"
            className="font-bold text-sm hover:text-primary transition-colors"
          >
            Next.js Starter
          </Link>
        </div>

        <nav className="flex items-center gap-1 flex-1">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">홈</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/about">소개</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm">
            로그인
          </Button>
          <Button size="sm">시작하기</Button>
        </div>
      </div>
    </header>
  );
}
