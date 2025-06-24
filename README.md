# 🚀 ALX Listing App

An elegant, scalable foundation for an Airbnb-style property listing platform. Built using modern web technologies and clean, maintainable architecture.

---

## 🧭 Project Overview

This milestone focuses on establishing a **scalable**, **maintainable**, and **performance-optimized** codebase using:

- ✅ **Next.js** for server-side rendering & static site generation  
- ✅ **TypeScript** for type safety and code confidence  
- ✅ **Tailwind CSS** for responsive, utility-first design  
- ✅ **ESLint & Prettier** for consistent code formatting

---

## 🚀 Getting Started

Follow the steps below to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DavisonFR/alx-listing-app-00.git
cd alx-listing-app-00
npm install
npm run dev
Visit http://localhost:3000 in your browser.

2️⃣ Modify Components & Pages
Edit files like pages/index.tsx, components/, and constants/ to customize the layout and data.

3️⃣ API Routes
Try the sample route:

bash
http://localhost:3000/api/hello
Feel free to update pages/api/hello.ts to adjust backend behavior.

🗂 Project Structure
alx-listing-app-00/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── Pill.tsx
│   └── PropertyCard.tsx
├── constants/
│   └── index.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   └── api/
│       └── hello.ts
├── public/
│   └── assets/
│       └── bg.jpg
├── styles/
│   └── globals.css
├── README.md
✨ Key Features
🏡 Dynamic property listings from sample dataset

💊 Filter pills that dynamically update listings

⚙️ Reusable UI components (PropertyCard, Pill, Layout)

📱 Mobile-first design with Tailwind CSS

⚡ Optimized rendering using Next.js

🔮 Future Improvements
Planned enhancements to power this platform forward:

🔄 Database integration for real property listings

🔑 Authentication with NextAuth.js

🌍 Geo-location search

📊 Advanced filters and price sorting

☁️ Deployment via Vercel or GitHub Pages