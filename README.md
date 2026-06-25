<h1 align="center">eDev E-Commerce Application</h1>

A modern, responsive e-commerce frontend application built with React, TypeScript, and Vite. This application provides a seamless shopping experience with user authentication, product browsing, cart management, and checkout functionality.
![Home Page](./docs/Homepage%201.png) 

## Project Resources

<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
  <a href="./docs/PRD.md" style="display: inline-block; padding: 4px 12px; background-color: #f0f0f0; color: #000; text-decoration: none; border-radius: 4px; font-size: 14px; border: 1px solid #ccc;">PRD</a>
  <a href="./docs/TECHNICAL_DESIGN.md" style="display: inline-block; padding: 4px 12px; background-color: #f0f0f0; color: #000; text-decoration: none; border-radius: 4px; font-size: 14px; border: 1px solid #ccc;">Technical Design</a>
  <a href="https://www.figma.com/design/3EsWysAL509NCt6pBYfOrD/E-commerce-Website-Template--Freebie---Community-?node-id=0-1&p=f&t=xTCbaNd2uyKp7e4B-0" style="display: inline-block; padding: 4px 12px; background-color: #f0f0f0; color: #000; text-decoration: none; border-radius: 4px; font-size: 14px; border: 1px solid #ccc;">Figma Design</a>
  <a href="https://github.com/edevsolution/e-commerce-backend" style="display: inline-block; padding: 4px 12px; background-color: #f0f0f0; color: #000; text-decoration: none; border-radius: 4px; font-size: 14px; border: 1px solid #ccc;">Backend Repository</a>
  <a href="https://vibenestfashion.netlify.app/" style="display: inline-block; padding: 4px 12px; background-color: #f0f0f0; color: #000; text-decoration: none; border-radius: 4px; font-size: 14px; border: 1px solid #ccc;">Live Demo</a>
</div>

## Project Structure

```
e-commerce-frontend/
├── public/
│   └── icon.png
├── src/
│   ├── assets/                 # Static assets (images, icons, etc.)
│   │   ├── bg.png
│   │   └── Banner_pic.png
│   ├── components/             # Reusable UI components
│   │   ├── hero/               # Hero section components
│   │   │   ├── Sparkle.tsx
│   │   │   └── Statitem.tsx
│   │   ├── layout/             # Layout components
│   │   │   └── Main.tsx
│   │   ├── navbar/             # Navigation components
│   │   │   └── Navbar.tsx
│   │   └── ui/                 # UI components
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── NotFound.tsx
│   ├── routers/                # Routing components
│   │   ├── AdminRoute.tsx
│   │   ├── PrivateRoute.tsx
│   │   └── Routes.tsx
│   ├── App.css                 # Global styles
│   ├── App.tsx                 # Main App component
│   ├── index.css               # Global CSS
│   ├── main.tsx                # Entry point
│   └── index.html              # HTML template
├── docs/
│   ├── PRD.md                  # Product Requirements Document (to be filled)
│   └── TECHNICAL_DESIGN.md     # Technical Design Document (to be filled)
├── .gitignore                  # Git ignore file
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript app configuration
├── tsconfig.node.json          # TypeScript node configuration
└── vite.config.ts              # Vite configuration
```

## Features

### User Authentication
- User registration with email and password
- Secure login/logout functionality
- Password recovery (placeholder for backend integration)
- Protected routes for authenticated users

### Product Catalog
- Product listing with filtering and sorting
- Product detail pages with images, descriptions, and pricing
- Search functionality (placeholder for backend integration)
- Category-based browsing

### Shopping Cart
- Add/remove items from cart
- Update item quantities
- Persistent cart storage (using localStorage, to be replaced with backend integration)
- Cart summary with subtotal, taxes, and shipping

### User Profile
- User profile management
- Order history viewing
- Address book management
- Payment methods storage

### Responsive Design
- Mobile-first approach
- Responsive breakpoints for mobile, tablet, and desktop
- Touch-friendly interactions
- Accessible UI components

## Technology Stack

### Frontend
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript for enhanced developer experience
- **Vite** - Next-generation frontend tooling for fast development and builds
- **React Router DOM** - Declarative routing for React applications
- **Axios** - Promise-based HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **DaisyUI** - Component library for Tailwind CSS
- **Lucide React** - Beautiful open-source icons

### Development Tools
- **ESLint** - Pluggable JavaScript/TypeScript linter
- **TypeScript ESLint** - TypeScript-aware ESLint parser and plugin
- **ESLint Plugin React** - React-specific linting rules
- **ESLint Plugin React Hooks** - Rules for React Hooks
- **ESLint Plugin React Refresh** - Enables React Fast Refresh

## Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher) or yarn or pnpm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd e-commerce-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_API_URL=your_api_endpoint_here
   VITE_APP_NAME=E-Commerce Store
   # Add other environment variables as needed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   Visit `http://localhost:5173` to view the application

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

To preview the production build:
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev` or `pnpm dev` - Starts the development server
- `npm run build` or `yarn build` or `pnpm build` - Builds the application for production
- `npm run lint` or `yarn lint` or `pnpm lint` - Runs ESLint for code quality checking
- `npm run preview` or `yarn preview` or `pnpm preview` - Previews the production build locally

## Environment Variables

The following environment variables can be configured in `.env` file:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL for API endpoints | `http://localhost:3000/api` |
| `VITE_APP_NAME` | Application name | `E-Commerce Store` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |

*Note: All environment variables must be prefixed with `VITE_` to be exposed to the Vite-processed code.*

## API Integration

This frontend application is designed to communicate with a RESTful API. The backend endpoints should follow these patterns:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh authentication token

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/orders` - Get user order history

### Products
- `GET /api/products` - Get list of products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/search?q=` - Search products
- `GET /api/products/category/:category` - Get products by category

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/items` - Add item to cart
- `PUT /api/cart/items/:itemId` - Update cart item quantity
- `DELETE /api/cart/items/:itemId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `GET /api/orders` - Get user's order history