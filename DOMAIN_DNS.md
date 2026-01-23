# Domain & DNS Configuration Guide

## 📌 Overview (Read-Only - No Changes Needed)

This document explains how custom domains work with Vercel and Cloudflare. Since your domain is already purchased externally, this is informational only.

---

## Current Setup Assumption

- ✅ Domain purchased from registrar (e.g., GoDaddy, Namecheap, Google Domains)
- ✅ Domain hosted on Cloudflare FREE tier
- ✅ Portfolio deployed on Vercel

---

## Cloudflare DNS Setup (Information Only)

### Why Cloudflare?
- ✅ FREE tier with unlimited DNS queries
- ✅ Automatic SSL/TLS certificates
- ✅ DDoS protection
- ✅ Global Anycast network
- ✅ DNSSEC support
- ✅ Analytics and insights
- ✅ Faster DNS resolution

### What Cloudflare Provides:
1. **DNS Management** - Route traffic to Vercel
2. **SSL/TLS** - Encrypt connections (HTTPS)
3. **CDN** - Cache static content globally
4. **Security** - DDoS protection, WAF
5. **Analytics** - Traffic insights

---

## DNS Configuration Explained

### If Using Custom Domain with Vercel:

#### **Option 1: Root Domain (example.com)**

**DNS Records Needed:**
```
Type: A
Name: @
Value: 76.76.21.21
Proxy: DNS only (Gray cloud)
```

**Alternative (CNAME flattening):**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
Proxy: DNS only (Gray cloud)
```

#### **Option 2: Subdomain (portfolio.example.com)**

**DNS Records Needed:**
```
Type: CNAME
Name: portfolio
Value: cname.vercel-dns.com
Proxy: DNS only (Gray cloud)
```

#### **Both Root + WWW:**
```
# Root domain
Type: A
Name: @
Value: 76.76.21.21

# WWW subdomain
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## SSL/TLS & HTTPS Flow

### How SSL Works with Vercel + Cloudflare:

```
User Browser → Cloudflare (SSL/TLS) → Vercel (SSL/TLS) → Your App
   HTTPS              HTTPS                HTTPS
```

### SSL Configuration:

**Cloudflare SSL/TLS Mode:**
- ✅ **Full (strict)** - Recommended
- Uses Cloudflare certificate for visitors
- Uses Vercel certificate for backend
- End-to-end encryption

**Vercel SSL:**
- ✅ Automatic SSL certificate
- ✅ Auto-renewal (Let's Encrypt)
- ✅ No manual configuration
- ✅ Covers custom domains

### Certificate Chain:
```
1. Cloudflare issues certificate to visitors
2. Cloudflare connects to Vercel via SSL
3. Vercel serves content with SSL
4. Full end-to-end encryption
```

---

## Domain Connection Flow (If Needed)

### Step-by-Step (Information Only):

#### **1. Add Domain in Vercel Dashboard**
```
Vercel Dashboard → Project → Settings → Domains
→ Add Domain → Enter: yourdomain.com
```

#### **2. Vercel Provides DNS Instructions**
```
Vercel will show:
- DNS record type (A or CNAME)
- DNS record value
- Verification instructions
```

#### **3. Add DNS Records in Cloudflare**
```
Cloudflare Dashboard → DNS → Add record
- Type: As instructed by Vercel
- Name: @ or subdomain
- Value: From Vercel instructions
- Proxy status: DNS only (initially)
```

#### **4. Verify Domain**
```
Vercel automatically verifies DNS
- Usually takes 5-60 minutes
- Vercel checks DNS propagation
- Issues SSL certificate
```

#### **5. Enable Cloudflare Proxy (Optional)**
```
After verification:
- Change proxy status to "Proxied" (Orange cloud)
- Enables Cloudflare CDN
- Adds DDoS protection
```

---

## Cloudflare Settings Explained

### **SSL/TLS Settings:**

**Recommended Configuration:**
```yaml
SSL/TLS mode: Full (strict)
Always Use HTTPS: On
Automatic HTTPS Rewrites: On
Minimum TLS Version: 1.2
TLS 1.3: Enabled
```

### **Speed Settings:**

**Optimization:**
```yaml
Auto Minify:
  - JavaScript: On
  - CSS: On
  - HTML: On

Brotli Compression: On
Rocket Loader: Off (Not needed with Next.js)
```

### **Caching:**

**Browser Cache:**
```yaml
Browser Cache TTL: Respect Existing Headers
```

**Page Rules (if needed):**
```
Cache Level: Standard
Edge Cache TTL: Respect Existing Headers
```

### **Security:**

**Recommended:**
```yaml
Security Level: Medium
Challenge Passage: 30 minutes
Browser Integrity Check: On
```

---

## DNS Propagation

### What is DNS Propagation?
When you update DNS records, changes take time to spread worldwide.

**Timeline:**
- Cloudflare DNS: Instant to 5 minutes
- Global propagation: Up to 24-48 hours (usually 1-2 hours)
- Local ISPs may cache longer

### Checking Propagation:

**Online Tools:**
- https://dnschecker.org
- https://whatsmydns.net
- https://mxtoolbox.com/DnsLookup.aspx

**Command Line:**
```bash
# Windows
nslookup yourdomain.com

# Linux/Mac
dig yourdomain.com

# Check specific DNS server
nslookup yourdomain.com 1.1.1.1
```

---

## Troubleshooting Common Issues

### **1. SSL Certificate Error**

**Symptom:** "Your connection is not private"

**Solutions:**
- Wait for SSL certificate provisioning (up to 24 hours)
- Check Cloudflare SSL mode is "Full (strict)"
- Verify DNS records are correct
- Clear browser cache

### **2. DNS Not Resolving**

**Symptom:** Domain doesn't load

**Solutions:**
- Verify DNS records in Cloudflare
- Check DNS propagation status
- Ensure nameservers point to Cloudflare
- Wait for propagation (up to 48 hours)

### **3. Mixed Content Warnings**

**Symptom:** Some content not loading over HTTPS

**Solutions:**
- Enable "Always Use HTTPS" in Cloudflare
- Enable "Automatic HTTPS Rewrites"
- Update hardcoded HTTP URLs to HTTPS

### **4. Redirect Loop**

**Symptom:** Page redirects infinitely

**Solutions:**
- Change Cloudflare SSL mode to "Full (strict)"
- Disable "Always Use HTTPS" temporarily
- Check Vercel redirect settings

---

## Performance Optimization

### Cloudflare + Vercel Benefits:

**Speed:**
- ✅ Cloudflare CDN caches static assets
- ✅ Vercel Edge Network serves dynamic content
- ✅ Brotli compression reduces file sizes
- ✅ HTTP/2 and HTTP/3 enabled

**Global Reach:**
- ✅ 200+ Cloudflare data centers
- ✅ 100+ Vercel edge locations
- ✅ Automatic routing to nearest server

---

## Cost Breakdown (100% Free)

### Cloudflare FREE Tier:
- ✅ Unlimited DNS queries
- ✅ SSL certificates
- ✅ DDoS protection (unmetered)
- ✅ Global CDN
- ✅ Analytics
- ✅ Up to 100,000 Workers requests/day

### Vercel FREE Tier:
- ✅ Unlimited bandwidth
- ✅ SSL certificates
- ✅ Custom domains (unlimited)
- ✅ Edge Network

### Only Cost:
- 💲 Domain registration (~$10-15/year)
  - Purchased from registrar (GoDaddy, Namecheap, etc.)
  - One-time annual fee

**Total Infrastructure Cost: $0/month** 🎉

---

## Architecture Diagram

```
┌─────────────────────────────────────────────┐
│  USER (Browser)                             │
└─────────────┬───────────────────────────────┘
              │ DNS Lookup
              ▼
┌─────────────────────────────────────────────┐
│  CLOUDFLARE DNS                             │
│  - Resolves domain to Vercel IP             │
│  - Returns: cname.vercel-dns.com            │
└─────────────┬───────────────────────────────┘
              │ HTTPS Request
              ▼
┌─────────────────────────────────────────────┐
│  CLOUDFLARE CDN (Optional Proxy)            │
│  - SSL/TLS Termination                      │
│  - DDoS Protection                          │
│  - Static Asset Caching                     │
│  - Security Filtering                       │
└─────────────┬───────────────────────────────┘
              │ HTTPS (Encrypted)
              ▼
┌─────────────────────────────────────────────┐
│  VERCEL EDGE NETWORK                        │
│  - SSL Certificate Validation               │
│  - Request Routing                          │
│  - Edge Caching                             │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  YOUR NEXT.JS APP                           │
│  - Server-side rendering                    │
│  - Static generation                        │
│  - API routes (if any)                      │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  RESPONSE (HTML/JSON/Assets)                │
└─────────────────────────────────────────────┘
```

---

## Best Practices

### DNS Configuration:
1. ✅ Use Cloudflare nameservers
2. ✅ Enable DNSSEC
3. ✅ Set appropriate TTL values (Auto is fine)
4. ✅ Use DNS-only mode initially, then enable proxy

### SSL/TLS:
1. ✅ Always use "Full (strict)" mode
2. ✅ Enable "Always Use HTTPS"
3. ✅ Use TLS 1.2 or higher
4. ✅ Enable HSTS (HTTP Strict Transport Security)

### Performance:
1. ✅ Enable Auto Minify
2. ✅ Enable Brotli compression
3. ✅ Set appropriate cache headers
4. ✅ Use Cloudflare proxy for static assets

---

## Summary

### What You Need to Know:

**If NOT using custom domain:**
- ✅ Use free Vercel domain: `*.vercel.app`
- ✅ No DNS configuration needed
- ✅ Automatic SSL
- ✅ Works immediately

**If USING custom domain:**
- ✅ Point DNS to Vercel (A or CNAME record)
- ✅ Cloudflare manages DNS
- ✅ Both issue SSL certificates
- ✅ Full encryption end-to-end

**Cost:**
- ✅ Cloudflare: FREE
- ✅ Vercel: FREE
- ✅ SSL: FREE
- 💲 Domain: ~$10-15/year (only cost)

---

## Resources

- **Vercel Custom Domains:** https://vercel.com/docs/concepts/projects/domains
- **Cloudflare DNS:** https://developers.cloudflare.com/dns/
- **SSL/TLS Guide:** https://developers.cloudflare.com/ssl/
- **DNS Propagation:** https://dnschecker.org

---

## Status

✅ Information provided  
✅ SSL/TLS flow explained  
✅ DNS configuration documented  
✅ Troubleshooting guide included  
✅ No changes required to codebase  

**This is informational only - no action needed unless adding custom domain.**
