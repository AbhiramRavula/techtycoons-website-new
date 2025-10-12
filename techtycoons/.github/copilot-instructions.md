# TechTycoons Website - AI Agent Instructions

This document guides AI coding agents on the essential patterns and workflows of the TechTycoons website project - a Next.js-based website for the Technical Club of Department of IT, MECS.

## Project Architecture

### Core Technologies
- Next.js 15.1.x (App Router)
- React 19.x
- TypeScript
- TailwindCSS 3.x
- Font Awesome Icons

### Directory Structure
```
src/
  app/           # Next.js App Router pages & layouts
    components/  # Shared React components
    [section]/  # Route-based pages (events, blogs, etc.)
  public/       # Static assets
    Images/     # Image assets including anime subfolder
```

### Key Patterns

1. **Routing & Pages**
   - Uses Next.js App Router pattern
   - Each route section has its own `page.tsx` under corresponding directory
   - Example: `src/app/events/page.tsx` handles `/events` route

2. **Component Structure**
   - Shared components live in `src/app/components/`
   - Layout wrapper (`layout.tsx`) applies common structure with Nav and Footer
   - Components use TypeScript for type safety

3. **Styling**
   - TailwindCSS for styling with custom config
   - Uses Geist and Geist Mono fonts through next/font
   - Font variables: `--font-geist-sans` and `--font-geist-mono`

## Developer Workflows

### Local Development
```bash
npm run dev    # Start development server
npm run build  # Production build
npm run lint   # Run TypeScript & ESLint checks
```

### Code Organization
- Keep shared components in `src/app/components/`
- Place route-specific components within their route folders
- Static assets go in `public/Images/` with appropriate subfolders
- TypeScript types should be properly defined for all props and data structures

### Common Tasks
1. **Adding a New Page**
   - Create new directory under `src/app/`
   - Add `page.tsx` with default export
   - Update navigation in `src/app/components/nav.tsx` if needed

2. **Adding New Components**
   - Use TypeScript interfaces for props
   - Follow existing component patterns in `src/app/components/`
   - Leverage TailwindCSS classes for styling

3. **Working with Images**
   - Place in `public/Images/` with descriptive names
   - Use relative paths from public directory
   - Consider image optimization needs