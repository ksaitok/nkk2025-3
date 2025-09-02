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

### Environment Variables
Create the following environment variables in your Netlify dashboard:

```bash
DATABASE_URL=file:./dev.db
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-netlify-site.netlify.app
```

### Build Configuration
The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- Legacy peer deps flag for dependency resolution
- Disabled dependency caching for fresh Prisma Client generation

### Deploy Steps
1. Connect your GitHub repository to Netlify
2. Set the build settings (automatically detected from netlify.toml)
3. Add environment variables
4. Deploy!

### Troubleshooting
If you encounter Prisma Client issues:
- The build process automatically regenerates Prisma Client
- Dependency caching is disabled to ensure fresh installations
- Postinstall script ensures Prisma Client is always up to date
