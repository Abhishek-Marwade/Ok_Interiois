# OK INTERIORS — Spaces That Move You

A premium, production-ready static website for **OK Interiors**, an interior architecture & design studio. Built with React, TypeScript, Three.js, and Tailwind CSS featuring an interactive 3D interior showroom.

🔗 Instagram: [@ok_interiors](https://www.instagram.com/ok_interiors/)

---

## ✨ Features

- **Interactive 3D Hero Showroom** — Real-time architectural interior scene with customizable lighting (day/sunset/evening), stone materials (travertine/marble), and wood finishes (walnut/oak)
- **Editorial Portfolio Gallery** — Category-filtered project archive with detail pages, image lightbox, and before/after renovation slider
- **Interactive Materials Explorer** — Tactile material library with sensory descriptions
- **WhatsApp Integration** — Context-aware WhatsApp deep links with pre-filled enquiry messages
- **Contact Form** — Browser-validated consultation form with WhatsApp fallback
- **Fully Responsive** — Tested at 360px–1920px breakpoints
- **SEO Optimized** — Unique page titles, meta descriptions, Open Graph tags, structured data, sitemap, robots.txt
- **Code Split** — Lazy-loaded pages keep initial bundle fast; Three.js loads only on the homepage
- **Reduced Motion** — Respects `prefers-reduced-motion` system setting
- **WebGL Fallback** — Static image fallback if the visitor's device lacks WebGL support

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| 3D Engine | Three.js + React Three Fiber + Drei |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM v7 |
| Typography | Cormorant Garamond (serif) + Plus Jakarta Sans (sans) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output goes to `dist/`

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg              # OK monogram favicon
│   ├── robots.txt               # Search engine crawler rules
│   ├── sitemap.xml              # XML sitemap for all pages
│   ├── _redirects               # SPA fallback for Netlify
│   ├── images/
│   │   └── projects/            # Project photography
│   └── models/                  # (Reserved for 3D models)
│
├── src/
│   ├── main.tsx                 # Entry point
│   ├── App.tsx                  # Router + layout (code-split pages)
│   ├── index.css                # Tailwind + design tokens + scrollbar
│   │
│   ├── data/                    # ⬅️ EDITABLE BUSINESS CONTENT
│   │   ├── siteConfig.ts        # Brand name, phone, email, address, social
│   │   ├── projects.ts          # Portfolio projects (add/edit here)
│   │   ├── services.ts          # Service descriptions & deliverables
│   │   ├── materials.ts         # Material library for explorer
│   │   └── testimonials.ts      # Client testimonials (pending approval)
│   │
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── ArchitecturalRoomScene.tsx  # Three.js 3D room geometry
│   │   │   └── Hero3DCanvas.tsx            # Canvas wrapper + controls
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive nav + mobile drawer
│   │   │   └── Footer.tsx       # Footer with contact grid
│   │   └── interactive/
│   │       ├── MaterialsExplorer.tsx   # Interactive material palette
│   │       ├── BeforeAfterSlider.tsx   # Draggable comparison slider
│   │       └── ImageLightbox.tsx       # Fullscreen gallery viewer
│   │
│   └── pages/
│       ├── HomePage.tsx         # 3D hero + all homepage sections
│       ├── ProjectsPage.tsx     # Filterable project grid
│       ├── ProjectDetailPage.tsx # Individual project pages
│       ├── ServicesPage.tsx     # Services with deliverables
│       ├── AboutPage.tsx        # Studio philosophy
│       ├── ContactPage.tsx      # Contact form + channels
│       └── NotFoundPage.tsx     # Custom 404
│
├── index.html                   # SEO meta, fonts, structured data
├── vite.config.ts               # Vite + Tailwind plugin
├── tsconfig.json                # TypeScript configuration
└── package.json
```

---

## ✏️ How to Customize

### Replace Business Details

Open **`src/data/siteConfig.ts`** and update:

```ts
contact: {
  phone: "+919876543210",        // ← Your real phone number
  whatsappNumber: "+919876543210", // ← Your WhatsApp number
  email: "hello@okinteriors.design", // ← Your email
  address: "Studio Address",     // ← Your studio address
  city: "Your City, India",
  isContactVerified: true,       // ← Set to true when details are final
}
```

### Replace the Logo

The logo is text-based (`OK` monogram in the navbar). To use an image logo:
1. Place your logo file in `public/images/logo.svg` (or .png)
2. Update the Navbar component in `src/components/layout/Navbar.tsx`

### Add New Projects

Open **`src/data/projects.ts`** and add a new entry to the `projects` array:

```ts
{
  id: "proj-7",
  slug: "your-project-slug",
  title: "Your Project Title",
  category: "Residential",
  year: "2024",
  location: "City Name",
  isSampleOrConcept: false,
  heroImage: "/images/projects/your-image.jpg",
  galleryImages: ["/images/projects/your-image.jpg"],
  description: "Brief description...",
  designBrief: "The client's vision...",
  designApproach: "How you executed...",
  materials: ["Material 1", "Material 2"],
  featured: true,
  specs: { area: "2,000 sq. ft.", timeline: "3 Months", scope: "Full Interior" }
}
```

Then place your project images in `public/images/projects/`.

### Add New Services

Edit **`src/data/services.ts`** following the existing pattern.

### Update Testimonials

Edit **`src/data/testimonials.ts`**. Set `isSampleOrPendingApproval: false` once the client has approved.

---

## 📬 Contact Form Setup

The contact form currently validates inputs in the browser and sends the enquiry via **WhatsApp deep link**. To connect a form submission backend:

### Option A: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form endpoint (e.g. `https://formspree.io/f/xyzabc`)
3. In `src/pages/ContactPage.tsx`, replace the `handleSubmit` function to `POST` to your Formspree endpoint

### Option B: Netlify Forms

1. Add `data-netlify="true"` to the `<form>` element
2. Netlify automatically handles submissions when deployed on Netlify

---

## 🌐 Deployment

### Netlify

1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `public/_redirects` file handles SPA routing automatically

### Vercel

1. Import repo in Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add a `vercel.json` for SPA rewrites:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

### GitHub Pages

1. Install: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/repo-name/'` in `vite.config.ts` if not using a custom domain
4. Run: `npm run build && npm run deploy`

---

## 📋 Important Notes

- **Sample Content**: Project images, testimonials, and some contact details are editorial samples. Items marked `isSampleOrConcept: true` or `isSampleOrPendingApproval: true` should be replaced with verified content before publishing.
- **No Backend Required**: This is a fully static frontend. No database, server, or API keys needed.
- **WhatsApp Numbers**: Update `whatsappNumber` in `siteConfig.ts` with the real business WhatsApp number before launch.
- **Instagram**: The site links to the real [@ok_interiors](https://www.instagram.com/ok_interiors/) Instagram profile.

---

## 📄 License

Private project. Built as a gift for OK Interiors.
