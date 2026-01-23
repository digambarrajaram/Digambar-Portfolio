# 🚀 Portfolio Update Workflow

## The DevOps Way: Single File Management

Your entire portfolio is managed from **ONE FILE**: `data/portfolio.ts`

## 📋 Quick Update Workflow

```bash
# 1. Edit your content
code data/portfolio.ts

# 2. Test locally (optional but recommended)
npm run build
npm run dev

# 3. Commit your changes
git add data/portfolio.ts
git commit -m "Update: [what you changed]"

# 4. Push to GitHub
git push

# 5. Vercel auto-deploys (2-3 minutes)
# ✅ Your website is now updated!
```

## 📝 Common Update Examples

### Add a New Project
Edit `data/portfolio.ts`:
```ts
export const projects = [
  // Add new project at the top
  {
    title: "My New AWS Project",
    problem: "Challenge I solved",
    solution: "How I implemented it",
    techStack: ["AWS", "Terraform", "Python"],
    architecture: "Multi-region setup with..."
  },
  // ...existing projects
];
```

### Update Contact Info
```ts
export const personalInfo = {
  email: "new@email.com",  // Update this
  // ...rest stays same
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/your-new-profile",  // Update this
};
```

### Add New Certification
```ts
export const certifications = [
  {
    name: "AWS Solutions Architect Professional",  // New cert
    issuer: "Amazon Web Services",
    year: "2026"
  },
  // ...existing certs
];
```

### Update Work Experience
```ts
export const experience = [
  {
    title: "Senior DevOps Engineer",  // New role
    company: "New Company Inc",
    period: "2026 - Present",
    responsibilities: [
      "Leading cloud migration...",
      "Implementing GitOps...",
    ]
  },
  // ...previous roles
];
```

## 🎯 What Changes Where

| Data Section | Updates These Pages |
|-------------|-------------------|
| `personalInfo` | Home, Contact, Header, Footer |
| `projects` | Projects page |
| `experience` | About page |
| `skills` | About page, Resume page |
| `certifications` | About page |
| `technologies` | Home page |
| `stats` | Resume page |

## ✅ Deployment Checklist

Before you push:
- [ ] Content updated in `data/portfolio.ts`
- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm run build` (builds successfully)
- [ ] Test locally with `npm run dev`
- [ ] Commit with clear message
- [ ] Push to `main` branch
- [ ] Check Vercel dashboard for deployment status
- [ ] Verify changes on live site (2-3 min)

## 💡 Pro Tips

1. **Use TypeScript autocomplete**: Your IDE shows all available fields
2. **Keep commits small**: One logical change per commit
3. **Test before push**: `npm run build` catches errors early
4. **Meaningful commit messages**: "Update AWS projects" not "update"
5. **Regular backups**: Git IS your backup, commit often

## 🔄 Rollback if Needed

Made a mistake? Easy rollback:
```bash
# See recent commits
git log --oneline

# Rollback to previous version
git revert HEAD

# Or go back 2 commits
git revert HEAD~2

# Push the rollback
git push
```

## 🛠 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 📦 File Structure

```
data/
├── portfolio.ts      ← YOUR SINGLE SOURCE OF TRUTH
└── README.md         ← Documentation

app/
├── page.tsx          → Imports from data/portfolio.ts
├── about/
│   └── page.tsx      → Imports from data/portfolio.ts
├── projects/
│   └── page.tsx      → Imports from data/portfolio.ts
├── resume/
│   └── page.tsx      → Imports from data/portfolio.ts
└── contact/
    └── page.tsx      → Imports from data/portfolio.ts
```

## 🎉 That's It!

**One file to rule them all.**  
Edit → Commit → Push → Auto-deploy.

No database. No CMS. No complexity.  
Just clean, version-controlled content management. 🚀
