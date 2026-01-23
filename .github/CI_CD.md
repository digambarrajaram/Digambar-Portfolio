# CI/CD Pipeline Documentation

## Overview

This project uses **GitHub Actions** for continuous integration and continuous deployment (CI/CD). The pipeline automatically runs on every push to the `main` branch and on all pull requests targeting `main`.

---

## Workflow Configuration

**File:** `.github/workflows/ci.yml`

### Triggers
- **Push to `main`** — Runs on every commit to the main branch
- **Pull Requests to `main`** — Runs on all PRs before merging

---

## Pipeline Stages

### 1. **Checkout Code**
- Uses: `actions/checkout@v4`
- Clones the repository code

### 2. **Setup Node.js**
- Uses: `actions/setup-node@v4`
- Version: Node.js 20.x LTS
- Enables npm caching for faster builds

### 3. **Install Dependencies**
- Command: `npm ci`
- Clean install from package-lock.json
- Ensures reproducible builds

### 4. **Lint Code**
- Command: `npm run lint`
- Runs ESLint on all TypeScript/JavaScript files
- **Fails pipeline on linting errors**
- Enforces code quality standards

### 5. **Build Application**
- Command: `npm run build`
- Builds Next.js production bundle
- Generates optimized static assets
- **Fails pipeline on build errors**

### 6. **Verify Build Output**
- Checks for `.next` directory
- Confirms build artifacts exist
- **Fails if build incomplete**

### 7. **Pipeline Status**
- Summary job showing overall status
- Reports success/failure
- **Fails entire pipeline if any step fails**

---

## Pipeline Flow

```
┌─────────────────────────────────────────┐
│  Push to main / PR to main              │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  1. Checkout Code                       │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  2. Setup Node.js 20.x                  │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  3. Install Dependencies (npm ci)       │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  4. Run ESLint                          │
│     ❌ FAIL on lint errors              │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  5. Build Production Bundle             │
│     ❌ FAIL on build errors             │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  6. Verify Build Output                 │
│     ❌ FAIL if .next missing            │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  7. Pipeline Status                     │
│     ✅ SUCCESS or ❌ FAIL               │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  Auto-deploy to Vercel (on success)     │
└─────────────────────────────────────────┘
```

---

## Error Handling

The pipeline is configured to **fail fast** on any error:

### Linting Errors
```bash
❌ ESLint errors detected
→ Pipeline stops immediately
→ PR cannot be merged
→ Developer must fix issues
```

### Build Errors
```bash
❌ TypeScript compilation errors
❌ Missing dependencies
❌ Configuration issues
→ Pipeline stops immediately
→ Prevents broken code in production
```

### Build Verification Errors
```bash
❌ .next directory missing
→ Build incomplete
→ Pipeline fails
```

---

## Status Badges

Add to README.md:

```markdown
![CI/CD Pipeline](https://github.com/digambarrajaram/digambar-portfolio/actions/workflows/ci.yml/badge.svg)
```

---

## Benefits

### 1. **Automated Quality Checks**
- No manual testing required
- Consistent code quality
- Early error detection

### 2. **Prevents Broken Deployments**
- Code must pass all checks before merge
- Production always deployable
- Reduced debugging time

### 3. **Fast Feedback**
- Developers know immediately if code breaks
- PR reviews include automated checks
- Faster development cycle

### 4. **Free Tier**
- GitHub Actions: 2,000 minutes/month (free)
- Average build time: ~2-3 minutes
- ~600+ builds per month for free

---

## Local Testing

Before pushing code, run the same checks locally:

```bash
# Install dependencies
npm ci

# Run linting
npm run lint

# Build application
npm run build
```

This ensures your code will pass the CI pipeline.

---

## Viewing Pipeline Results

### On GitHub:
1. Go to repository on GitHub
2. Click "Actions" tab
3. See all workflow runs
4. Click on any run to see details

### On Pull Requests:
- Status checks appear automatically
- ✅ Green checkmark = Passed
- ❌ Red X = Failed
- Click "Details" to see logs

---

## Extending the Pipeline

### Add Testing (Future)
```yaml
- name: Run tests
  run: npm test
```

### Add Code Coverage
```yaml
- name: Generate coverage report
  run: npm run test:coverage
```

### Add Security Scanning
```yaml
- name: Security audit
  run: npm audit --audit-level=high
```

### Add Deployment Preview (Vercel)
Vercel automatically creates preview deployments for PRs.
No additional configuration needed.

---

## Troubleshooting

### Pipeline Fails on Dependencies
```bash
Error: npm ci requires package-lock.json
```
**Solution:** Commit package-lock.json to repository

### Pipeline Fails on Lint
```bash
Error: ESLint errors found
```
**Solution:** Run `npm run lint` locally and fix issues

### Pipeline Fails on Build
```bash
Error: TypeScript compilation failed
```
**Solution:** Run `npm run build` locally and fix errors

---

## Best Practices

1. **Never skip checks** — Don't force-push to bypass CI
2. **Fix errors immediately** — Don't accumulate technical debt
3. **Keep pipeline fast** — Optimize build time (<5 min)
4. **Monitor failures** — Investigate and fix quickly
5. **Update dependencies** — Keep GitHub Actions up to date

---

## Security

- ✅ No secrets exposed in logs
- ✅ Read-only checkout (default)
- ✅ Isolated environment per build
- ✅ Automatic cleanup after run

---

## Deployment Integration

### Vercel Automatic Deployment

When CI pipeline passes on `main` branch:
1. GitHub Actions ✅ Passes
2. Vercel detects push to `main`
3. Vercel builds and deploys automatically
4. Live site updated in ~30 seconds

**No manual deployment needed!**

---

## Status: Ready for Production

✅ Pipeline configured  
✅ Error handling implemented  
✅ Triggers set correctly  
✅ Fast feedback enabled  
✅ Free tier optimized  

**Next:** Push to GitHub to activate the workflow.
