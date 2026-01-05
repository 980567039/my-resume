<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1C612L-vRpVC_TcfmRKG8DBK2sHx5Ievy

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended for quick deployment)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from the project root:
   ```bash
   vercel
   ```
   Follow the prompts to configure your project.

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using GitHub Integration (Recommended for CI/CD)

1. Push your code to a GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** -> **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect Vite/React settings. Click **"Deploy"**.
5. Your site will be automatically updated whenever you push to the `main` branch.


