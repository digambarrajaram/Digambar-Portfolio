# Digambar Portfolio

**Production-grade personal portfolio website for a DevOps & Cloud Engineer**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)

---

## 🚀 Tech Stack

### **Frontend**
- **Framework:** Next.js 16.1.4 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono (Optimized)
- **ESLint:** Configured for Next.js best practices

### **Infrastructure & DevOps**
- **Version Control:** Git + GitHub
- **CI/CD:** GitHub Actions (Automated build, lint, test)
- **Hosting:** Vercel (Free Tier, Edge Network)
- **DNS:** Cloudflare (Free Tier, SSL/TLS)
- **Monitoring:** Vercel Analytics (Free Tier)

---

## 📁 Project Structure

```
digambar-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with global config
│   ├── page.tsx            # Home page
│   └── globals.css         # Tailwind CSS imports
├── components/             # Reusable React components
├── styles/                 # Additional stylesheets (if needed)
├── public/                 # Static assets (images, resume, etc.)
├── .github/
│   └── workflows/          # CI/CD pipeline definitions
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

---

## 🏗️ Hosting Strategy

### **Vercel (Primary Hosting)**
- **Free Tier Benefits:**
  - Unlimited bandwidth
  - Automatic HTTPS
  - Global CDN
  - Instant rollbacks
  - Preview deployments for PRs
  - Edge functions support

### **Cloudflare DNS**
- Free SSL/TLS certificates
- DDoS protection
- Global DNS resolution
- DNSSEC support
- Analytics & insights

### **Deployment Flow**
```
1. Push to GitHub (main branch)
   ↓
2. GitHub Actions triggers CI/CD pipeline
   ↓
3. Run linting & build checks
   ↓
4. On success → Auto-deploy to Vercel
   ↓
5. Vercel builds & deploys to edge network
   ↓
6. Live at production URL (< 30 seconds)
```

---

## 🔄 CI/CD Approach

### **GitHub Actions Workflow**

**Triggers:**
- Push to `main` branch
- Pull requests to `main`

**Pipeline Steps:**
1. **Checkout code** → Clone repository
2. **Setup Node.js** → Install Node 20.x LTS
3. **Install dependencies** → `npm ci` (clean install)
4. **Run linter** → `npm run lint` (ESLint)
5. **Build project** → `npm run build` (Next.js production build)
6. **Fail on errors** → Pipeline stops if any step fails

**Benefits:**
- ✅ Prevents broken code from reaching production
- ✅ Enforces code quality standards
- ✅ Automatic deployments on successful builds
- ✅ Full audit trail of all deployments

---

## 💻 Local Development

### **Prerequisites**
- Node.js 20.x or higher
- npm 10.x or higher
- Git

### **Setup**
```bash
# Clone repository
git clone https://github.com/digambarrajaram/digambar-portfolio.git
cd digambar-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### **Available Scripts**
```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

---

## 🎯 Features

- ✅ **Server-Side Rendering (SSR)** for optimal SEO
- ✅ **Responsive Design** (Mobile-first approach)
- ✅ **Fast Performance** (Lighthouse score > 90)
- ✅ **Type Safety** (Full TypeScript coverage)
- ✅ **Modern UI** (Tailwind CSS with dark mode)
- ✅ **Production-ready** (Optimized builds, error handling)

---

## 📊 Performance Goals

- **Lighthouse Score:** > 90 (all categories)
- **First Contentful Paint (FCP):** < 1.5s
- **Time to Interactive (TTI):** < 3.0s
- **Cumulative Layout Shift (CLS):** < 0.1

---

## 🛠️ Tools & Services (100% Free Tier)

| Tool | Purpose | Cost |
|------|---------|------|
| **Next.js** | Frontend framework | Free (Open Source) |
| **Vercel** | Hosting & deployment | Free Tier |
| **GitHub** | Version control | Free (Public repo) |
| **GitHub Actions** | CI/CD pipeline | Free (2,000 min/month) |
| **Cloudflare** | DNS & SSL | Free Tier |
| **Vercel Analytics** | Monitoring | Free Tier |
| **VS Code** | IDE | Free |

**Total Monthly Cost: $0** 🎉

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Digambar**  
DevOps & Cloud Engineer

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ using 100% free & open-source tools**
