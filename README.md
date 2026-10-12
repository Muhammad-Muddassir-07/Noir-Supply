# NOIR SUPPLY — Haute E-Commerce Web Storefront

**MTech Solutions — Frontend Development Internship (Batch 01 • Task 02)**

A modern, minimalist, and responsive frontend e-commerce website built with React, Vite, and Tailwind CSS. Features architectural luxury streetwear browsing, dedicated product details, persistent cart management via localStorage, and simulated checkout flow.

---

## 🚀 Live Demo & Deployment
- **Deployment Platform:** Vercel / Netlify
- **Repository:** GitHub

---

## 🛠️ Technologies & Stack
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Typography:** Google Fonts (Syne, Plus Jakarta Sans, Cormorant Garamond, Cinzel)
- **State Persistence:** LocalStorage for cart management

---

## 📦 Features & Pages Included

### 1. Home Page (`/`)
- Store branding & architectural identity (`NOIR SUPPLY`).
- Editorial luxury hero section (`DEFINE OUTRAGE`) with responsive model showcase.
- Disciplines / Category tiles (`Outerwear`, `Tops`, `Bottoms`, `Accessories`).
- Curated SS26 drops with quick-add actions and limited edition badges.
- Brand philosophy and lookbook motion preview modal.

### 2. Products / Shop Page (`/shop`)
- 8 curated streetwear products with high-resolution photography, names, pricing, and category badges.
- Real-time search filter and category filtering.
- Price sorting (Low to High / High to Low / Newest).
- Responsive 2-column mobile and 4-column desktop product grid.

### 3. Product Details Page (`/product/:id`)
- Dedicated product view displaying high-res photography, specifications (GSM textile, fit, colorway).
- Interactive silhouette size selector (`S`, `M`, `L`, `XL`).
- Quantity stepper controls (`-` / `+`).
- Instant "Add to Cart" action with visual confirmation.

### 4. About Page (`/about`)
- In-depth brand story, archival manifesto, and core tenets (Numbered Allocations, Substantive Grammage, Permanent Architecture).

### 5. Contact Page (`/contact`)
- Direct concierge contact coordinates (Paris atelier, email, private WhatsApp, Instagram).
- Functional contact form with frontend validation and confirmation state.

### 6. Cart Page (`/cart`)
- Selected items list with unit prices and calculated item subtotals.
- Interactive quantity controls (`+` / `-`) and item removal action.
- Free worldwide shipping threshold progress indicator ($250 threshold).
- VIP voucher allocation code (`NOIR15` for 15% discount).
- Persistent state saved to `localStorage`.

### 7. Checkout Page (`/checkout`)
- Complete order summary with subtotal and express courier calculations.
- Comprehensive customer and shipping address form.
- Form validation on required fields.
- Simulated order completion with confirmation screen (demo checkout, no real payments).

---

## 💻 Local Setup & Run Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repository-url>

# Navigate into the project directory
cd noir-supply

# Install dependencies
npm install

# Start local development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build
```bash
# Build the production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 📋 Evaluation Checklist Alignment
| Area | Status | Description |
| :--- | :---: | :--- |
| **Pages** | ✅ | Home, Products, Product Details, About, Contact, Cart, Checkout |
| **Products** | ✅ | 8 products with high-res photos, titles, prices, descriptions, specs |
| **Cart** | ✅ | Add/remove items, quantity stepper, subtotal/totals, localStorage sync |
| **Checkout** | ✅ | Form validation, order summary, simulated demo confirmation state |
| **Responsive** | ✅ | Optimized for mobile phones, tablets, laptops, and ultra-wide screens |
| **UI / UX** | ✅ | Minimalist luxury editorial aesthetic, visible empty states, no clutter |
| **Code Quality** | ✅ | Clean modular React components, clean linter pass, fast bundle |
