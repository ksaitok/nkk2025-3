# README

This is a [Next.js](https://nextjs.org) project for the Nikkei Demolition Industry Co., Ltd. website.

## Features

- Multilingual support (English, Japanese, Portuguese)
- Responsive design for web and mobile
- Admin panel for inserting demolition history with photos
- Accordion language switcher
- Database with Prisma and SQLite

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Admin Access

Email: admin@nikkei.com  
Password: admin123

## Technologies

- Next.js 15
- TypeScript
- Tailwind CSS
- NextAuth
- Prisma
- Next-intl

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Netlify

### Prerequisites
- Netlify account
- GitHub repository connected to Netlify

### Environment Variables (CRITICAL for Production)
Set these environment variables in your Netlify dashboard under **Site settings > Environment variables**:

```bash
DATABASE_URL=file:./dev.db
NEXTAUTH_SECRET=your-super-secret-key-here-make-it-long-and-random
NEXTAUTH_URL=https://nikkei2025-3.netlify.app
NODE_ENV=production
```

### Build Configuration
The `netlify.toml` file is already configured with:
- Build command: `prisma generate && next build`
- Publish directory: `.next`
- Legacy peer deps flag for dependency resolution
- Disabled dependency caching for fresh Prisma Client generation
- Node.js version 22 specified

### Deploy Steps
1. **Connect Repository**: Connect your GitHub repository (`ksaitok/nkk2025-3`) to Netlify
2. **Set Environment Variables**: Add all required environment variables in Netlify dashboard
3. **Deploy**: Netlify will automatically detect settings from `netlify.toml`
4. **Monitor Build**: Check build logs for any issues

### Troubleshooting Production Errors

#### If you see "Application error: a server-side exception"
1. **Check Environment Variables**: Ensure all variables are set correctly in Netlify
2. **Verify NEXTAUTH_URL**: Must match your Netlify domain exactly
3. **Check Database**: SQLite file path should work in Netlify environment
4. **Review Build Logs**: Check for Prisma Client generation errors

#### Common Issues:
- **Missing NEXTAUTH_SECRET**: Generate a secure random string
- **Wrong NEXTAUTH_URL**: Must be `https://your-site.netlify.app`
- **Database Connection**: SQLite should work, but monitor for file permission issues

### Build Logs
Monitor these in Netlify build logs:
- ✅ Prisma Client generation
- ✅ Next.js compilation
- ✅ Static page generation
- ✅ API route building

The application includes comprehensive error handling and will show detailed error pages in development mode.
