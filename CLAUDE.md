# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # 개발 서버 실행 (Turbopack)
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 실행
npm run lint:fix   # ESLint 자동 수정
```

## Architecture

Next.js App Router 기반 스타터 키트. 모든 페이지/레이아웃은 `app/` 디렉토리에 위치하며 기본적으로 React Server Components로 동작한다.

### 폴더 구조

- `app/` — 라우트, 레이아웃(`layout.tsx`), 전역 CSS(`globals.css`)
- `components/ui/` — shadcn/ui 컴포넌트 (Button, Card, Badge, Input, Label, Separator). 직접 수정 가능한 복사-붙여넣기 방식
- `components/layout/` — Header, Footer 레이아웃 컴포넌트
- `components/theme-provider.tsx` — `next-themes` 래퍼 (`"use client"` 필요)
- `components/theme-toggle.tsx` — 다크/라이트 토글 버튼 (`"use client"` 필요)
- `lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)

### Path Aliases

`@/`는 프로젝트 루트를 가리킨다 (`tsconfig.json`의 `paths` 설정). 예: `@/components/ui/button`.

### 테마 시스템

TailwindCSS v4 사용. 색상 토큰은 `app/globals.css`의 `@theme inline` 블록에서 CSS 변수로 정의되며 OKLCH 색공간을 사용한다. 다크모드는 `.dark` 클래스 기반 (`@custom-variant dark (&:is(.dark *))`). 새 색상 추가 시 `:root`/`.dark` 블록과 `@theme inline` 양쪽에 모두 추가해야 한다.

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <component-name>
```

`components.json` 설정: `style: "new-york"`, `baseColor: "neutral"`, RSC 지원 활성화.

### 클라이언트 컴포넌트

`useTheme`, `useState`, `useEffect` 등 클라이언트 훅을 사용하는 컴포넌트는 파일 상단에 `"use client"` 지시어가 필요하다.
