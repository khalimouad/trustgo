# TrustGo Website

A modern delivery service website built with Next.js, TypeScript, Tailwind CSS, and featuring dark/light mode support.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Modern UI**: Clean, professional design matching the TrustGo brand
- **Fast Performance**: Built with Next.js for optimal speed
- **Type Safety**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
trustgo/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx        # Navigation header with theme toggle
│   ├── Hero.tsx          # Hero section with promotional banner
│   ├── Services.tsx      # Services cards section
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── Footer.tsx        # Site footer
│   └── ThemeToggle.tsx   # Dark/light mode toggle component
├── lib/
│   └── utils.ts          # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Build for Production

```bash
npm run build
npm start
```

## Content Source

Content and branding information sourced from [trustgo.ma](https://trustgo.ma)

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
