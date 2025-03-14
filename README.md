my-gallery-app/
│── public/                # Static assets (favicon, logos, etc.)
│── src/
│   ├── app/               # Next.js App Router (Main routing system)
│   │   ├── layout.tsx     # Root layout (shared UI)
│   │   ├── page.tsx       # Home page (Gallery)
│   │   ├── upload/        # Photo upload page
│   │   │   ├── page.tsx   # Upload form UI
│   │   ├── login/         # User authentication page
│   │   │   ├── page.tsx   # Login page UI
│   │   ├── api/           # API routes (Server Actions or REST APIs)
│   │   │   ├── upload.ts  # Image upload API route
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── PhotoCard.tsx  # Component to display a photo
│   │   ├── UploadForm.tsx # Image upload form
│   ├── lib/               # Firebase & Cloudinary config
│   │   ├── firebase.js    # Firebase setup
│   │   ├── cloudinary.js  # Cloudinary setup
│   ├── styles/            # Tailwind & global styles
│   │   ├── globals.css    # Global styles (includes Tailwind)
│   ├── utils/             # Helper functions (formatting, validations, etc.)
│   │   ├── formatDate.ts  # Function to format dates
│   ├── context/           # React context for global state
│   │   ├── AuthContext.ts # User authentication context
│   ├── hooks/             # Custom React hooks
│   │   ├── useAuth.ts     # Hook for authentication
│── .env                   # Environment variables (API keys)
│── .gitignore             # Git ignore file
│── next.config.ts         # Next.js configuration
│── package.json           # Project dependencies
│── tsconfig.json          # TypeScript configuration
│── README.md              # Project documentation


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
