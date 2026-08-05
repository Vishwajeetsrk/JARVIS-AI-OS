---
inclusion: always
---

# Technology Stack

## Core

- **Runtime**: Node.js 20+ with TypeScript 5.3+
- **Framework**: TanStack Start (React 19, Vite 7)
- **Styling**: Tailwind CSS v4 with HSL custom tokens
- **Database**: Supabase (PostgreSQL + pgvector)
- **AI Provider**: Vercel AI SDK with multi-provider support

## Agent System

- **Orchestration**: Mastra AI framework
- **Tools**: Shell executor, code runner, document generators
- **Memory**: Global memory bank with category-based storage

## Development

- **Build**: Vite 7 with TanStack plugin
- **Testing**: Vitest
- **Linting**: ESLint + TypeScript strict mode
- **Package Manager**: npm with --legacy-peer-deps

## Never Use

- styled-components (use Tailwind)
- Redux (use TanStack Query)
- classnames (use clsx + tailwind-merge)
- Any AGPL-licensed code (keep everything MIT)
