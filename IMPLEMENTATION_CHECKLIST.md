# Implementation Checklist - Portfolio Issues

> Complete this checklist to bring your portfolio to production-grade standards

## 🔴 Phase 1: Critical Security (1-2 hours)

- [ ] **Add CSP Headers**
  - File: `vercel.json`
  - Add: `Content-Security-Policy` header
  - Time: 15 min

- [ ] **Add HSTS Header**
  - File: `vercel.json`
  - Add: `Strict-Transport-Security: max-age=31536000`
  - Time: 5 min

- [ ] **Obfuscate Email Address**
  - File: `data/portfolio.ts` and components
  - Action: Remove plain email from source, use contact form
  - Time: 30 min

- [ ] **Remove Phone Number**
  - File: `data/portfolio.ts`
  - Action: Delete or make non-public
  - Time: 5 min

- [ ] **Tighten TypeScript Config**
  - File: `tsconfig.json`
  - Add: `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`
  - Time: 10 min

- [ ] **Create `.env.example`**
  - File: `.env.example` (new)
  - Content: Document required env vars
  - Time: 5 min

**Subtotal: ~70 minutes**

---

## 🟠 Phase 2: Accessibility (2-3 hours)

- [ ] **Fix Color Contrast Issues**
  - Files: `components/Footer.tsx`, `components/Header.tsx`, `app/page.tsx`
  - Change: `text-slate-400/500` → `text-slate-300` or add opacity
  - Time: 20 min
  - Test with: https://webaim.org/resources/contrastchecker/

- [ ] **Enhance Focus States**
  - File: `app/globals.css`
  - Add: `.focus-ring` utility class
  - Apply to: All buttons, links, form inputs
  - Time: 30 min

- [ ] **Add Alt Text to Images**
  - Files: All components using `Image`
  - Verify: Meaningful, descriptive alt text
  - Time: 15 min

- [ ] **Test Keyboard Navigation**
  - Check: Tab through all interactive elements
  - Verify: Logical tab order
  - Test: All modals/menus keyboard accessible
  - Time: 20 min

- [ ] **Test with Screen Reader**
  - Tools: NVDA (Windows), JAWS, or VoiceOver (Mac)
  - Check: All content is readable
  - Time: 30 min

**Subtotal: ~115 minutes**

---

## 🟡 Phase 3: Error Handling & Metadata (2-3 hours)

- [ ] **Create 404 Page**
  - File: `app/not-found.tsx` (new)
  - Content: Friendly error page with home link
  - Time: 10 min

- [ ] **Create Error Boundary**
  - File: `app/error.tsx` (new)
  - Content: Catch and handle runtime errors
  - Time: 15 min

- [ ] **Add Per-Page Metadata**
  - Files: `app/about/page.tsx`, `app/projects/page.tsx`, etc.
  - Add: Unique titles, descriptions, OG images
  - Time: 30 min

- [ ] **Improve Skeleton Loaders**
  - Files: `app/page.tsx` (dynamic imports)
  - Replace: Generic "Loading..." with proper skeletons
  - Time: 30 min

- [ ] **Verify robots.txt**
  - File: `public/robots.txt`
  - Check: Proper disallow rules, sitemap reference
  - Time: 10 min

- [ ] **Test with Lighthouse**
  - Run: Chrome DevTools → Lighthouse
  - Target: 90+ on all metrics
  - Time: 20 min

**Subtotal: ~115 minutes**

---

## 🟢 Phase 4: SEO & Rich Data (1-2 hours)

- [ ] **Add JSON-LD Schema Markup**
  - File: `app/layout.tsx` or `lib/metadata.ts`
  - Add: Person, BreadcrumbList schemas
  - Time: 20 min

- [ ] **Create OG Images**
  - Files: Design or generate 1200x630px images
  - Add to: Metadata for each page
  - Time: 30 min
  - Tool: https://www.figma.com/ or https://www.canva.com/

- [ ] **Add Analytics Consent**
  - File: `app/layout.tsx`
  - Conditional: Load analytics only if enabled
  - Time: 15 min

- [ ] **Configure Bundle Size Monitoring**
  - File: `package.json` scripts
  - Add: CI/CD check for bundle size
  - Time: 20 min

- [ ] **Add Dark/Light Mode Toggle** (Optional)
  - Time: 45 min
  - Tool: next-themes or custom context

**Subtotal: ~130 minutes (65 min required)**

---

## ✅ Final Verification

Before deployment, verify:

- [ ] All security headers are set
- [ ] WCAG AA contrast standards met
- [ ] Keyboard navigation works
- [ ] Screen reader test passed
- [ ] Lighthouse score 90+
- [ ] No TypeScript errors
- [ ] No console errors in production
- [ ] Mobile layout tested
- [ ] All links working
- [ ] 404 page displays correctly

---

## 📊 Progress Tracker

**Started:** _______________  
**Target Completion:** _______________

### Phase Progress
- Phase 1: ___% complete (Security)
- Phase 2: ___% complete (Accessibility)
- Phase 3: ___% complete (Error Handling)
- Phase 4: ___% complete (SEO/Polish)

---

## 📝 Notes

Use this space to track additional notes or blockers:

```
[Your notes here]
```

---

## 🎯 Final Metrics

Before fixes:
- Lighthouse Score: ___
- Accessibility Issues: 23
- Security Headers: Minimal

After fixes:
- Lighthouse Score: ___ (Target: 90+)
- Accessibility Issues: 0
- Security Headers: ✅ Complete

---

**Remember:** Don't try to fix everything at once. Work through the phases in order for best results.

