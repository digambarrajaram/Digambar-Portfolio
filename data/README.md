# Portfolio Content Management

## 📝 Single Source of Truth

All portfolio content is managed from **`portfolio.ts`** - this is your single file to update everything on the website.

## 🚀 How to Update Your Portfolio

### 1. Edit `data/portfolio.ts`
Update any section:
- Personal information
- Projects
- Skills & technologies
- Experience
- Certifications
- Contact details

### 2. Commit & Push
```bash
git add data/portfolio.ts
git commit -m "Update portfolio content"
git push
```

### 3. Auto-Deploy
Vercel automatically deploys your changes within 2-3 minutes.

## 📦 Content Sections

### **personalInfo**
Your name, role, contact info, images
```ts
name: "Your Name"
email: "your@email.com"
```

### **projects**
Add/edit/remove projects
```ts
projects = [
  {
    title: "New Project",
    problem: "What problem it solves",
    solution: "How you solved it",
    techStack: ["Tech1", "Tech2"],
    architecture: "Architecture details"
  }
]
```

### **experience**
Update work history
```ts
experience = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2023 - Present",
    responsibilities: ["Item 1", "Item 2"]
  }
]
```

### **skills & certifications**
Manage your technical skills and certifications

### **stats**
Update experience metrics
```ts
stats = {
  yearsExperience: "7+",
  projectsCompleted: "75+",
  certifications: "5"
}
```

## ✅ Best Practices

1. **Always commit after changes** - Keep version history
2. **Test locally first**: `npm run build && npm run dev`
3. **Use descriptive commit messages**
4. **Keep data accurate and current**

## 🎯 This Approach is DevOps-Friendly Because:
- ✅ **Version controlled** (Git tracks all changes)
- ✅ **No database needed** (Static generation)
- ✅ **Fast deployment** (Only commit & push)
- ✅ **Single source of truth** (One file manages everything)
- ✅ **Type-safe** (TypeScript catches errors)
- ✅ **Infrastructure as Code philosophy** applied to content

## 📄 What Gets Updated Automatically

When you edit `portfolio.ts`, these pages update:
- **Home** → Hero, about, technologies
- **About** → Introduction, experience, skills, certifications
- **Projects** → All project cards
- **Resume** → Summary, skills, stats
- **Contact** → Email, social links, location
- **Header/Footer** → Name, role, links

---

**Remember**: Edit ONE file (`portfolio.ts`) → Commit → Push → Site updates automatically! 🎉
