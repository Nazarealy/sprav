# SPR Main

A modern Next.js project built with App Router, TypeScript, and Tailwind CSS. This project is set up for step-by-step development based on Figma designs.

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Global CSS variables for colors and design tokens
- ✅ Font optimization with Next.js font system
- ✅ SEO configuration
- ✅ Component structure ready for development
- ✅ Animation utilities
- ✅ Responsive design utilities

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
spr_main/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and CSS variables
├── components/            # Reusable components
├── lib/                   # Utilities and helpers
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── ...config files
```

## Color Variables

Color variables are defined in `app/globals.css` and can be updated based on your Figma design. The project includes:

- Primary, secondary, and accent colors
- Background and foreground colors
- Border and text colors
- Success, error, warning, and info colors

## Fonts

The project includes three font families:
- **Sans**: Inter (default)
- **Serif**: Playfair Display
- **Mono**: JetBrains Mono

Fonts are configured in `app/layout.tsx` and can be customized as needed.

## Development Workflow

1. Import Figma design through MCP server
2. Update color variables in `app/globals.css` based on design
3. Create components in the `components/` directory
4. Build sections step-by-step following the design
5. Add animations and interactive elements as needed

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

# spr
