# 🛍 Mini-Commerce

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Jeffreyai7/mini-commerce/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made With](https://img.shields.io/badge/Made%20with-Next.js-000?logo=next.js)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/styled%20with-tailwindcss-38b2ac?logo=tailwindcss)](https://tailwindcss.com)

> A modern, responsive e-commerce demo app built with Next.js 14, Zustand, Tailwind CSS, and TypeScript.

### 🌐 [Live Demo](https://your-deployment-url.vercel.app)

---

## 📦 Project Overview

_Mini-Commerce_ replicates a complete e-commerce flow using only local data and state — ideal for prototyping or showcasing front-end architecture.

### Key Features

- ✅ Product listing with dynamic detail pages
- ✅ Adjustable cart with quantity control
- ✅ Zustand-based global state with localStorage persistence
- ✅ Toast notifications on cart updates
- ✅ Checkout flow with "Thank you" page and fake order ID
- ✅ Fully responsive design & dark mode support

---

## 🎨 Design Approach

- _Layout_: Grid and flex-based layout for adaptive structure
- _Colors_: CSS variables themed for light/dark modes using Tailwind’s @layer base strategy
- _Responsiveness_: Built mobile-first with aspect-square, sizes, and adaptive width classes

---

## 🧰 Tools & Techniques

| Tool              | Purpose                             |
| ----------------- | ----------------------------------- |
| _Next.js 14_      | App Router, SSR-ready structure     |
| _Tailwind CSS_    | Utility-first styling               |
| _Zustand_         | Cart state & persistence            |
| _react-hot-toast_ | Toast messages for UX feedback      |
| _react-icons_     | Icons throughout UI                 |
| _Jest + RTL_      | Component testing (unit + behavior) |
| _TypeScript_      | Type safety + IntelliSense          |
| _Prettier_        | Code formatting                     |

> All dependencies are local — no backend or external API required.

---

## 🕸 SEO & Performance

- Semantically structured HTML (<main>, <section>, headings)
- Optimized images via next/image with responsive sizing
- Lightweight bundle (~ minimal libraries)
- Metadata setup via <head> component (per page)

---

## 🛡 Error Handling

- _Loading State_: Shimmer/spinner with feedback
- _Error State_: Custom error component if product fails to load
- _Not Found_: Graceful fallback for missing slugs
- _Form Input_: Prevents invalid values (like quantity < 1)

---

## 🧪 Testing

Basic tests written with _Jest_ + _React Testing Library_:

- ✅ Renders product details
- ✅ Handles cart addition
- ✅ Fallback if product is not found
- ✅ Simulates loading/error state

More tests can be added for edge cases, accessibility, and checkout.

---

## 🚀 Setup & Development

```bash
# Clone the repo
git clone https://github.com/Jeffreyai7/mini-commerce.git
cd mini-commerce

# Install dependencies
npm install

# Run locally
npm run dev

# Format code
npm run format

# Run tests
npm run test
```
