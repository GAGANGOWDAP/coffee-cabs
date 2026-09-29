# COFFEE CABS — PRODUCTION ROLLBACK & RECOVERY PROCEDURE

## 1. Executive Strategy Overview
The Coffee Cabs web platform is deployed as a static Single Page Application (SPA) on **GitHub Pages**, built via **Vite** and **React Router**. Source code and deployment builds are tracked in Git (`main` branch).

---

## 2. Version Control & Source Audit
- **Git Repository:** `https://github.com/GAGANGOWDAP/coffee-cabs`
- **Primary Production Branch:** `main`
- **Build Output Directory:** `dist/`

---

## 3. Emergency Rollback Steps (GitHub Pages Deployment)

If a production issue or regression occurs following a release:

### Option A: Immediate Revert via Git (Recommended)
1. **Identify Stable Commit:** View recent commits using `git log -n 5` to find the last known-good commit hash.
2. **Revert Bad Commit:**
   ```bash
   git revert HEAD --no-edit
   ```
3. **Push to Main:**
   ```bash
   git push origin main
   ```
4. **GitHub Actions / Pages Build:** GitHub Pages automatically rebuilds and deploys the reverted `main` state within 1–3 minutes.

### Option B: Hard Reset & Force Push (Emergency Maintenance)
```bash
git checkout main
git reset --hard <STABLE_COMMIT_HASH>
git push origin main --force
```

---

## 4. Environment Variables & Secret Safety
- Environment parameters are managed via `.env` / Vite environment variables (`VITE_GA_MEASUREMENT_ID`, `VITE_SITE_URL`).
- Zero private secrets or API keys are embedded in frontend source files.

---

## 5. Application Data Backup & Form Integrity
- Form submissions (`BookingForm.tsx` and `ContactPage.tsx`) interact via client-to-WhatsApp API messaging (`wa.me`) and direct communication protocols.
- No local database migration or server database recovery is required during a frontend rollback.
