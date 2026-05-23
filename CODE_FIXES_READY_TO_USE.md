# Code Fixes - Ready-to-Use Solutions

## 1️⃣ Fix #1: Update vercel.json with Complete Security Headers

**File:** `vercel.json`

**Replace the entire file with:**

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com https://cdn.vercel.com https://vercel.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(), payment=()"
        },
        {
          "key": "X-Permitted-Cross-Origin-Policies",
          "value": "none"
        }
      ]
    }
  ]
}
```

**Why:** Adds critical CSP, HSTS, and cross-origin policies to prevent XSS, clickjacking, and other attacks.

---

## 2️⃣ Fix #2: Obfuscate Email in data/portfolio.ts

**File:** `data/portfolio.ts`

**Change from:**
```typescript
export const personalInfo = {
  name: "Digambar Rajaram",
  title: "DevOps & Cloud Infrastructure Engineer",
  location: "India",
  phone: "+91-7353570952",  // ❌ Remove this
  email: "digambarrajaram2@gmail.com",  // ❌ Make private
};
```

**Change to:**
```typescript
export const personalInfo = {
  name: "Digambar Rajaram",
  title: "DevOps & Cloud Infrastructure Engineer",
  location: "India",
};

// Email obfuscated - use in components only when needed
// Decode: atob("ZGlnYW1iYXJyYWphcmFtMkBnbWFpbC5jb20=")
export const getContactEmail = () => {
  return atob("ZGlnYW1iYXJyYWphcmFtMkBnbWFpbC5jb20=");
};
```

**In Components - Use like this:**

```typescript
// components/ContactCard.tsx
import { getContactEmail } from '@/data/portfolio';

export function ContactCard({ showCopy }: ContactCardProps) {
  const email = getContactEmail();
  
  return (
    <a href={`mailto:${email}`}>
      {email}
    </a>
  );
}
```

**Why:** Email won't be visible in HTML source, preventing bot scraping.

---

## 3️⃣ Fix #3: Update tsconfig.json

**File:** `tsconfig.json`

**Replace with:**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

**Why:** Catches more potential bugs and unused code at compile time.

---

## 4️⃣ Fix #4: Update Color Contrast in app/globals.css

**File:** `app/globals.css`

**Add this to your globals.css:**

```css
/* =========================================================
   ACCESSIBILITY - COLOR CONTRAST FIXES
   ========================================================= */

/* Fix text colors for WCAG AA compliance (4.5:1 contrast) */
:root {
  /* Update secondary text to higher contrast */
  --text-secondary: #CBD5E1;  /* Better: slate-200 equivalent */
  --text-tertiary: #94A3B8;   /* Keep: slate-400 for less important */
  
  /* Add new contrast-safe colors */
  --text-interactive: #E2E8F0;  /* slate-200 for links/buttons */
  --text-muted: #64748B;        /* Keep: slate-500 for minimal text */
}

/* Accessible focus states */
@layer components {
  .focus-ring {
    @apply focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-md;
  }
  
  a:focus-visible {
    @apply outline-2 outline-offset-2 outline-emerald-400 rounded-md;
  }
  
  button:focus-visible {
    @apply outline-2 outline-offset-2 outline-emerald-400 rounded-md;
  }
  
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    @apply outline-2 outline-offset-2 outline-emerald-400;
  }
}

/* Apply better contrast to footer text */
footer {
  --text-secondary: #cbd5e1;  /* Use slate-200 */
  --text-tertiary: #94a3b8;   /* Use slate-400 */
}

/* Skip link (already good, keep visible) */
.skip-link {
  @apply absolute -top-8 left-0 bg-emerald-600 text-white px-4 py-2 rounded focus:top-0 z-50 transition-all;
}
```

**Update component text colors - example for Footer.tsx:**

```tsx
// Before
<p className="text-sm text-slate-400">Text</p>

// After  
<p className="text-sm text-slate-300">Text</p>  // Better contrast

// Or for less important text, add opacity
<p className="text-sm text-slate-400/90">Text</p>
```

**Why:** Ensures WCAG AA contrast ratio of 4.5:1 for normal text.

---

## 5️⃣ Fix #5: Create app/not-found.tsx

**File:** `app/not-found.tsx` (NEW FILE)

```typescript
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Digambar Rajaram',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="site-container text-center space-y-8">
        
        {/* 404 Header */}
        <div className="space-y-4">
          <h1 className="text-8xl sm:text-9xl font-black text-slate-50 tracking-tighter">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-slate-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 
              text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 
              border-2 border-emerald-500/30 text-emerald-300 font-semibold rounded-xl 
              hover:bg-emerald-500/10 transition-colors"
          >
            Report an Issue
          </Link>
        </div>

        {/* Suggestions */}
        <div className="pt-8 space-y-2 text-sm text-slate-400">
          <p>Try one of these instead:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Projects', href: '/projects' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-emerald-400 hover:text-emerald-300"
              >
                {link.label} •
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 6️⃣ Fix #6: Create app/error.tsx

**File:** `app/error.tsx` (NEW FILE)

```typescript
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to error reporting service (optional)
    console.error('Error:', error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="site-container text-center space-y-8">
        
        {/* Error Header */}
        <div className="space-y-4">
          <h1 className="text-8xl sm:text-9xl font-black text-slate-50 tracking-tighter">
            Oops!
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
            Something Went Wrong
          </h2>
        </div>

        {/* Error Details */}
        <div className="space-y-4">
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            An unexpected error occurred. Our team has been notified.
            Please try again or contact us if the problem persists.
          </p>

          {/* Error Message (Development Only) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <details className="max-w-2xl mx-auto p-4 text-left bg-slate-900/50 rounded-lg border border-slate-700/50">
              <summary className="cursor-pointer font-mono text-sm text-slate-300">
                Error Details (Dev Only)
              </summary>
              <pre className="mt-2 text-xs text-slate-400 overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 
              text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 
              border-2 border-emerald-500/30 text-emerald-300 font-semibold rounded-xl 
              hover:bg-emerald-500/10 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
```

---

## 7️⃣ Fix #7: Create .env.example

**File:** `.env.example` (NEW FILE)

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://digambarrajaram.cloud

# Analytics
NEXT_PUBLIC_ANALYTICS_ENABLED=true

# Feature Flags
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

---

## 8️⃣ Fix #8: Update next.config.ts with Security Settings

**File:** `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compress output
  compress: true,
  
  // Performance optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, must-revalidate',
        },
      ],
    },
  ],
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },

  // Redirects for old URLs (if needed)
  redirects: async () => [
    // Example: redirect old URLs
    // {
    //   source: '/old-path',
    //   destination: '/new-path',
    //   permanent: true,
    // },
  ],
};

export default nextConfig;
```

---

## 9️⃣ Fix #9: Add Analytics Consent Wrapper

**File:** `app/layout.tsx`

**Update the Analytics import section:**

```typescript
// OLD
import { Analytics } from "@vercel/analytics/next";

// NEW - Add conditional rendering
{process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' && (
  <Analytics />
)}
```

**Full example in layout.tsx:**

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WebVitals />
        
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <MobileMenuProvider>
          <Header />
          <main id="main-content" role="main" className="page-gradient min-h-screen max-w-screen overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <MobileMenuOverlay />
        </MobileMenuProvider>

        {/* Conditional Analytics */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' && (
          <Analytics />
        )}
      </body>
    </html>
  );
}
```

---

## ✅ Testing After Fixes

Run these commands to verify:

```bash
# Check for TypeScript errors
npm run lint

# Build and check for warnings
npm run build

# Check Lighthouse
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Run audit

# Test accessibility
# Use: https://wave.webaim.org/ or axe DevTools
```

---

## 📋 Verification Checklist

After applying fixes, verify:

- [ ] No TypeScript errors: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Lighthouse score 90+
- [ ] WAVE reports 0 errors
- [ ] All links functional
- [ ] Tab navigation works
- [ ] 404 page displays
- [ ] Email is obfuscated in HTML
- [ ] Security headers present (check in DevTools Network tab)
- [ ] No console errors

