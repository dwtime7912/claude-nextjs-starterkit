import {
  ArrowRight,
  Zap,
  Shield,
  Palette,
  Code2,
  Package,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const features = [
  {
    icon: Zap,
    title: "Next.js",
    description:
      "App Router, Server Components, Turbopack으로 최고의 개발 경험을 제공합니다.",
    badge: "Latest",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description:
      "CSS 기반 설정, @theme directive, OKLCH 색공간으로 더 빠르고 유연한 스타일링.",
    badge: "v4",
  },
  {
    icon: Package,
    title: "shadcn/ui",
    description:
      "복사-붙여넣기 방식의 접근 가능한 UI 컴포넌트. 완전한 커스터마이징 가능.",
    badge: "Latest",
  },
  {
    icon: Shield,
    title: "TypeScript",
    description:
      "엄격한 타입 안전성으로 런타임 오류를 빌드 타임에 잡아냅니다.",
    badge: "Strict",
  },
  {
    icon: Code2,
    title: "lucide-react",
    description:
      "500개 이상의 아름다운 SVG 아이콘. 트리쉐이킹으로 번들 크기 최적화.",
    badge: "500+ icons",
  },
  {
    icon: Sparkles,
    title: "즉시 사용 가능",
    description:
      "설정 없이 바로 개발 시작. 모든 설정이 완료된 프로덕션 준비 스타터.",
    badge: "Ready",
  },
];

const techStack = [
  { name: "Next.js", variant: "default" as const },
  { name: "React 19", variant: "secondary" as const },
  { name: "TypeScript", variant: "outline" as const },
  { name: "TailwindCSS v4", variant: "default" as const },
  { name: "shadcn/ui", variant: "secondary" as const },
  { name: "lucide-react", variant: "outline" as const },
  { name: "Radix UI", variant: "secondary" as const },
  { name: "clsx + twMerge", variant: "outline" as const },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="size-3" />
            Next.js + TailwindCSS v4
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            현대적인 웹 개발을 위한
            <br />
            <span className="text-muted-foreground">스타터 키트</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Next.js App Router, TypeScript, TailwindCSS v4, shadcn/ui로 구성된
            프로덕션 준비 스타터 키트입니다. 설정 없이 바로 개발을 시작하세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="gap-2">
              시작하기
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline">
              문서 보기
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <Badge key={tech.name} variant={tech.variant}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              포함된 기술 스택
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              모든 현대적 웹 프로젝트에 필요한 기술들이 최적으로 설정되어
              있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="gap-1 -ml-2">
                      자세히 보기
                      <ArrowRight className="size-3" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-muted-foreground mb-8">
            모든 설정이 완료된 스타터 키트로 아이디어를 빠르게 현실로
            만드세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg">
              프로젝트 시작
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline">
              GitHub에서 보기
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
