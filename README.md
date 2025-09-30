## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 15** - [docs](https://nextjs.org/docs)

- **Next-intl** - [docs](https://next-intl.dev/)

- **Tailwind CSS V4** - [docs](https://tailwindcss.com/docs/installation/using-vite)

- **HeroUI** - [docs](https://www.heroui.com/docs/guide/introduction)

- **Framer Motion** - [docs](https://motion.dev/)

- **Embla Carousel** - [docs](https://www.embla-carousel.com/)

- **Shadcn Components** - [docs](https://ui.shadcn.com/)

- **Lucide React** - [docs](https://lucide.dev/icons/)

## Things to know before coding

- When using **HeroUI** components, always import them from their respective files.
  - **DO NOT** `import Button from '@heroui/react'`
  - **DO** `import { Button } from '@heroui/button'`
- When creating new pages, implement SSG workaround for i18n, like explained
  [here](https://next-intl.dev/docs/routing/setup#static-rendering).
- When using **svg files** add them to the `assets` folder & import them as regular react
  components: `import { Logo } from '../ui/Logo'` (possible be using custom turbopack loader, see
  next.config.ts)
