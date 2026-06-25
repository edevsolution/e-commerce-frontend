# edev E-Commerece - Technical Design Document

**Version:** 1.0  
**Date:** 11.04.2026
**Author:** Robiul Islam.

---

## 1. Executive Summary

This document outlines the technical architecture and implementation approach for the ShopBD e-commerce platform. The solution follows a modern MERN stack architecture (MongoDB, Express, React, Node.js) with selected enhancements for performance, security, and scalability.

## 2. Technology Stack & Rationale

### Frontend
- **React 18** with **Vite** - Modern build tooling for fast development and optimized production builds
- **React Router v6** - Declarative routing with nested routes and lazy loading capabilities
- **Context API** - For global state management (cart, authentication)
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful, free MIT-licensed SVG icons

### Backend
- **Node.js** - JavaScript runtime for scalable server-side applications
- **Express.js** - Minimalist web framework for building RESTful APIs
- **Mongoose** - MongoDB object modeling tool for structured data access
- **JWT (JSON Web Tokens)** - Stateless authentication mechanism
- **bcrypt** - Secure password hashing

### Infrastructure & Services
- **Database:** MongoDB Atlas (free tier) - Fully managed cloud database with automatic scaling
- **Image Storage:** Cloudinary (free tier) - Cloud-based image management with optimization and CDN
- **Backend Hosting:** Railway - Simplified deployment with automatic builds from Git
- **Frontend Hosting:** Vercel - Optimized for React applications with edge networking
- **API Testing:** Postman/Newman - For API documentation and automated testing

### Stack Decision Justification (MERN)
The MERN stack was selected based on:
1. **Team Familiarity** - Existing expertise reduces ramp-up time and increases development velocity
2. **JavaScript Everywhere** - Single language across stack simplifies development and maintenance
3. **MongoDB Flexibility** - Document model accommodates evolving product catalog schemas without migrations
4. **Vibrant Ecosystem** - Rich npm package availability accelerates feature development
5. **Cost-Effectiveness** - All selected services offer generous free tiers suitable for MVP

## 3. System Architecture

### High-Level Architecture
```
┌─────────────────┐    HTTPS/WSS    ┌──────────────────┐
│   User Browser   │◄──────────────►│   Vercel CDN     │
│   (SPA React)    │    Requests    │   (Frontend)     │
└─────────────────┘                └──────────────────┘
                                      ▲
                                      │ HTTPS/API Calls
                                      ▼
                           ┌──────────────────┐
                           │   Railway        │
                           │   (Backend API)  │
                           └──────────────────┘
                                      ▲
                                      │ MongoDB Wire Protocol
                                      ▼
                           ┌──────────────────┐
                           │ MongoDB Atlas    │
                           │   (Database)     │
                           └──────────────────┘
                                      ▲
                                      │ Image Upload/Fetch
                                      ▼
                           ┌──────────────────┐
                           │   Cloudinary     │
                           │ (Image Storage)  │
                           └──────────────────┘
```

### Key Architectural Decisions
1. **Single Page Application (SPA)** - React frontend for rich, responsive user experience
2. **API-First Design** - Clearly defined REST contracts between frontend and backend
3. **Stateless Authentication** - JWT enables horizontal scaling without session affinity
4. **Separation of Concerns** - Distinct layers for presentation, business logic, and data access
5. **Externalized Media** - Cloudinary offloads image processing and delivery from application servers

## 4. Folder Structure

### Backend (`shopbd-backend/`)
```
shopbd-backend/
├── src/
│   ├── models/          # Mongoose schema definitions
│   │   ├── User.model.js
│   │   ├── Product.model.js
│   │   ├── Order.model.js
│   │   └── ...
│   ├── routes/          # Express route handlers
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── order.routes.js
│   │   ├── user.routes.js
│   │   └── ...
│   ├── middleware/      # Custom Express middleware
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   └── ...
│   ├── controllers/     # Business logic handlers
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── order.controller.js
│   │   ├── user.controller.js
│   │   └── ...
│   ├── config/          # Configuration files
│   │   ├── database.js
│   │   ├── environment.js
│   │   └── ...
│   ├── utils/           # Utility functions
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   └── ...
│   └── server.js        # Application entry point
├── .env                 # Environment variables (gitignored)
├── package.json
└── README.md
```

### Frontend (`shopbd-frontend/`)
```
shopbd-frontend/
├── src/
│   ├── pages/           # Route-level components (one per route)
│   │   ├── Home.page.jsx
│   │   ├── ProductList.page.jsx
│   │   ├── ProductDetail.page.jsx
│   │   ├── Cart.page.jsx
│   │   ├── Checkout.page.jsx
│   │   ├── Login.page.jsx
│   │   ├── Register.page.jsx
│   │   ├── Profile.page.jsx
│   │   ├── AdminDashboard.page.jsx
│   │   ├── AdminProducts.page.jsx
│   │   ├── AdminOrders.page.jsx
│   │   └── NotFound.page.jsx
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Header, Footer, Layout components
│   │   ├── ui/          # Primitive UI elements (Button, Input, Card, etc.)
│   │   ├── cart/        # Cart-specific components
│   │   ├── product/     # Product cards, filters, etc.
│   │   ├── auth/        # Authentication forms
│   │   └── order/       # Order-related components
│   ├── context/         # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   ├── services/        # API service functions
│   │   ├── api.js       # Axios instance configuration
│   │   ├── authService.js
│   │   ├── productService.js
│   │   ├── cartService.js
│   │   └── orderService.js
│   ├── hooks/           # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   └── useApi.js
│   ├── styles/          # Global styles and theme
│   │   ├── tailwind.config.js
│   │   ├── input.css
│   │   └── ...
│   ├── utils/           # Utility functions
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── ...
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── ...
├── .env                 # Environment variables (gitignored)
├── index.html
├── package.json
└── vite.config.js
```

## 5. Database Schema

### Product Collection
```javascript
{
  _id: ObjectId,
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true, enum: ['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports'] },
  stock: { type: Number, required: true, min: 0, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### User Collection
```javascript
{
  _id: ObjectId,
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  passwordHash: { type: String, required: true, minlength: 8 },
  role: { 
    type: String, 
    required: true, 
    enum: ['shopper', 'admin'], 
    default: 'shopper' 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Order Collection
```javascript
{
  _id: ObjectId,
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  items: [{
    productId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true 
    },
    name: { type: String, required: true },           // Denormalized for historical accuracy
    price: { type: Number, required: true, min: 0 },  // Price at time of purchase
    qty: { type: Number, required: true, min: 1 },
    total: { type: Number, required: true, min: 0 }   // price * qty
  }],
  customerInfo: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }
  },
  status: { 
    type: String, 
    required: true, 
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], 
    default: 'Pending' 
  },
  subTotal: { type: Number, required: true, min: 0 },
  totalPrice: { type: Number, required: true, min: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Indexing Strategy
- **Users:** Unique index on `email`
- **Products:** Compound index on `(category, stock)` for filtering
- **Orders:** Compound index on `(userId, createdAt DESC)` for user order history
- **Orders:** Index on `status` for admin order management views

## 6. API Specification

### Authentication Endpoints
| Method | Endpoint | Description | Access | Request Body | Response |
|--------|----------|-------------|--------|--------------|----------|
| POST | `/api/auth/register` | Register new shopper | Public | `{name, email, password}` | `{user: {...}, token: "jwt"}` |
| POST | `/api/auth/login` | Authenticate user | Public | `{email, password}` | `{user: {...}, token: "jwt"}` |
| POST | `/api/auth/logout` | Invalidate session | Private | `{}` | `{success: true}` |

### Product Endpoints
| Method | Endpoint | Description | Access | Query Params | Response |
|--------|----------|-------------|--------|--------------|----------|
| GET | `/api/products` | Get product list | Public | `?category=&limit=&offset=&sort=` | `[{...product...}]` |
| GET | `/api/products/:id` | Get single product | Public | - | `{...product...}` |
| POST | `/api/products` | Create new product | Admin only | - | `{...createdProduct...}` |
| PUT | `/api/products/:id` | Update product | Admin only | - | `{...updatedProduct...}` |
| DELETE | `/api/products/:id` | Delete product | Admin only | - | `{success: true}` |

### Order Endpoints
| Method | Endpoint | Description | Access | Request Body | Response |
|--------|----------|-------------|--------|--------------|----------|
| POST | `/api/orders` | Create new order | Private | `{items: [{productId, qty}], customerInfo}` | `{...createdOrder...}` |
| GET | `/api/orders` | Get all orders | Admin only | `?status=&page=&limit=` | `[{...order...}]` |
| GET | `/api/orders/mine` | Get user's orders | Private | `?page=&limit=` | `[{...order...}]` |
| GET | `/api/orders/:id` | Get single order | Private/Owner/Admin | - | `{...order...}` |
| PUT | `/api/orders/:id/status` | Update order status | Admin only | `{status: "Pending\|Shipped\|Delivered"}` | `{...updatedOrder...}` |

### User Endpoints (Admin Only)
| Method | Endpoint | Description | Access | Response |
|--------|----------|-------------|--------|----------|
| GET | `/api/users` | Get all users | Admin only | `[{...user...}]` |
| GET | `/api/users/:id` | Get single user | Admin only | `{...user...}` |
| PUT | `/api/users/:id` | Update user | Admin only | `{...updatedUser...}` |

### Response Formats
**Success Response:**
```json
{
  "success": true,
  "data": {...},
  "message": "Optional message"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {...} // Optional validation details
  }
}
```

## 7. Authentication Flow

### Login Process
1. User submits credentials via `/api/auth/login`
2. Backend validates email format and password strength
3. User document retrieved by email
4. Password verified using bcrypt comparison
5. Upon successful validation:
   - JWT payload created: `{ userId, email, role, iat, exp }`
   - Token signed with `JWT_SECRET` using HS256 algorithm
   - HTTP-only cookie set with token (Secure, SameSite=Strict)
   - Response: `{ success: true, user: {id, name, email, role} }`

### Protected Route Access
1. Request includes cookies (automatically by browser)
2. Authentication middleware extracts token from `Authorization` header or cookie
3. Token verified using `JWT_SECRET`
4. On success:
   - User payload decoded and attached to `request.user`
   - Request proceeds to route handler
5. On failure:
   - 401 Unauthorized response returned
   - Invalid/expired token, missing token, or malformed Authorization header

### Admin Route Protection
1. Authentication middleware validates JWT as above
2. Authorization middleware checks `request.user.role === 'admin'`
3. If false, returns 403 Forbidden with appropriate message
4. If true, request proceeds to admin route handler

### Security Considerations
- **Cookie Security:** HttpOnly, Secure (HTTPS only), SameSite=Strict
- **Token Expiration:** 24 hours for access tokens
- **CSRF Protection:** Double-submit cookie pattern or SameSite cookies
- **Brute Force Protection:** Rate limiting on auth endpoints (5 attempts/15min/IP)
- **Password Security:** Minimum 8 characters, bcrypt salt rounds = 12
- **Input Validation:** All inputs sanitized and validated against schema

## 8. Environment Variables

### Backend (`.env`)
```
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/shopbd?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRES_IN=24h

# Image Upload
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>

# Security
BCRYPT_SALT_ROUNDS=12
```

### Frontend (`.env`)
```
# Vite Environment Variables (must start with VITE_)
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=ShopBD
VITE_APP_VERSION=1.0.0
```

**Important:** Never commit `.env` files to version control. Use environment-specific configurations in deployment platforms.

## 9. Development Workflow

### Local Development Setup
1. Clone repository
2. Install backend dependencies: `cd shopbd-backend && npm install`
3. Install frontend dependencies: `cd shopbd-frontend && npm install`
4. Configure environment variables:
   - Copy `.env.example` to `.env` in both directories
   - Fill in required values (MongoDB URI, JWT Secret, Cloudinary credentials)
5. Start development servers:
   - Backend: `npm run dev` (runs on http://localhost:5000)
   - Frontend: `npm run dev` (runs on http://localhost:5173)
6. Enable hot module replacement for rapid iteration

### Production Build Process
1. **Frontend:**
   ```bash
   cd shopbd-frontend
   npm run build    # Creates optimized build in /dist
   ```
   - Deploy `/dist` folder to Vercel
   - Vercel automatically detects and serves SPA

2. **Backend:**
   ```bash
   cd shopbd-backend
   npm run build    # Compiles if needed (for TS) or prepares for production
   npm start        # Starts production server
   ```
   - Deploy to Railway with automatic build detection
   - Set environment variables in Railway dashboard

### Database Migrations
- Initial schema defined in model files
- For production schema changes:
  1. Create migration script
  2. Test against staging database
  3. Execute during maintenance window
  4. Monitor for rollback requirements

## 10. Quality Assurance

### Testing Strategy
#### Unit Testing
- **Backend:** Jest + Supertest for API route testing
- **Frontend:** Jest + React Testing Library for component testing
- **Target:** >80% code coverage

#### Integration Testing
- API contract testing with Postman/Newman
- Critical user journey testing (registration → purchase → order history)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)

#### Performance Testing
- Load testing with k6 or Apache JMeter
- Target: <2s page load, <200ms API response
- Stress testing for peak load scenarios

#### Security Testing
- OWASP ZAP for vulnerability scanning
- Manual penetration testing for auth flows
- Dependency scanning with npm audit and Snyk

### Code Quality
- **Linting:** ESLint with Airbnb config (backend), ESNext (frontend)
- **Formatting:** Prettier with 2-space indentation
- **Type Checking:** PropTypes or TypeScript (if adopted)
- **Code Reviews:** Mandatory pull request reviews
- **Continuous Integration:** GitHub Actions for automated testing on PR

## 11. Deployment Architecture

### Development
```
Developer Machines
    ↓ (git push)
GitHub Repository
    ↓ (webhook)
Development Staging (Optional)
    ↓ (manual promotion)
Production Environment
```

### Production
```
┌─────────────────────┐    HTTPS    ┌─────────────────────┐
│   End Users         │◄────────────►│   Vercel Edge       │
│   (Global)          │    Requests  │   (Frontend CDN)    │
└─────────────────────┘             └─────────────────────┘
                                              │
                                              │ HTTPS/API
                                              ▼
                                      ┌─────────────────────┐
                                      │   Railway           │
                                      │   (Backend API)     │
                                      │   (Auto-scaling)    │
                                      └─────────────────────┘
                                              │
                                              │ MongoDB Wire
                                              ▼
                                      ┌─────────────────────┐
                                      │ MongoDB Atlas       │
                                      │   (Managed DB)      │
                                      │   (Global Clusters) │
                                      └─────────────────────┘
                                              │
                                              │ Image Upload
                                              ▼
                                      ┌─────────────────────┐
                                      │   Cloudinary        │
                                      │   (Image CDN)       │
                                      │   (Global Edge)     │
                                      └─────────────────────┘
```

### Scaling Considerations
- **Horizontal Scaling:** Both frontend and backend designed for horizontal scaling
- **Database:** MongoDB Atlas provides automatic scaling with sharding options
- **Caching:** Redis integration planned for Phase 2 (session caching, query caching)
- **CDN:** Static assets served via Vercel Edge Network and Cloudinary
- **Load Balancing:** Built-in load balancing in Railway and Vercel platforms

## 12. Monitoring & Observability

### Application Metrics
- **Frontend:** Web Vitals (LCP, FID, CLS), custom analytics
- **Backend:** Request latency, error rates, throughput
- **Database:** Query performance, connection pool utilization
- **Infrastructure:** CPU, memory, disk, network utilization

### Logging Strategy
- **Structured Logging:** JSON format for log aggregation
- **Log Levels:** error, warn, info, debug
- **Sensitive Data:** PII excluded from logs (passwords, tokens, etc.)
- **Retention:** 30 days for application logs, 90 days for access logs

### Alerting
- **Error Rates:** >5% error rate triggers alert
- **Response Time:** >1s average response time triggers warning
- **Availability:** <99% uptime triggers critical alert
- **Resource Utilization:** >80% CPU/memory for 5+ minutes triggers warning

### Health Checks
- **Liveness Probe:** Container/process is running
- **Readiness Probe:** Application ready to accept traffic
- **Database Connection:** Verify pool connectivity
- **External Services:** Verify Cloudinary, email service connectivity

## 13. Risks & Mitigations

### Technical Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Performance degradation under load | Medium | High | Implement caching, optimize queries, CDN for assets |
| Security vulnerabilities in dependencies | Low | High | Regular dependency scanning, automated updates, WAF |
| Database connection exhaustion | Medium | Medium | Connection pooling, proper cleanup, monitoring |
| Third-party service downtime (Cloudinary, email) | Low | Medium | Fallback mechanisms, graceful degradation |
| Bundle size growth affecting load time | Medium | Low | Code splitting, lazy loading, bundle analysis |

### Operational Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Configuration drift between environments | Low | High | Infrastructure as Code, automated deployment |
| Data loss/backup failure | Low | Critical | Automated backups, point-in-time recovery, DR testing |
| Deployment failure | Medium | High | Blue-green deployments, rollback procedures, feature flags |
| Team knowledge silos | Medium | Medium | Documentation, pair programming, knowledge sharing |

## 14. Future Technical Enhancements

### Phase 2 (Immediate Post-V1)
- **TypeScript Migration** - Gradual migration for improved type safety
- **State Management Upgrade** - Evaluate Redux Toolkit or Zustand for complex state
- **Server-Side Rendering (SSR)** - Implement Next.js for SEO and initial load performance
- **GraphQL Exploration** - Evaluate for flexible data fetching requirements
- **WebSocket Integration** - Real-time notifications for order status, chat

### Phase 3 (Scalability Focus)
- **Microservices Decomposition** - Split monolith into domain-specific services
- **Event-Driven Architecture** - Apache Kafka/RabbitMQ for decoupled services
- **Advanced Caching** - Redis implementation for session store and query caching
- **Search Optimization** - Elasticsearch integration for advanced product search
- **Microservice Observability** - Distributed tracing with Jaeger or Zipkin

### Phase 4 (Innovation)
- **Progressive Web App (PWA)** - Offline capabilities, push notifications
- **AI/ML Integration** - Product recommendations, demand forecasting
- **Augmented Reality** - Product visualization in real environment
- **Blockchain Exploration** - For supply chain transparency (long-term)

---

## Appendices

### Appendix A: Glossary of Terms
- **JWT:** JSON Web Token - Open standard for securely transmitting information
- **CSRF:** Cross-Site Request Forgery - Attack that tricks users into executing unwanted actions
- **SPA:** Single Page Application - Web application that loads single HTML page
- **SSR:** Server-Side Rendering - Rendering web pages on server rather than client
- **PWA:** Progressive Web App - Web application that uses modern web capabilities
- **CDN:** Content Delivery Network - Distributed network of servers delivering content

### Appendix B: Reference Implementations
- **Authentication:** Based on OWASP Authentication Cheat Sheet
- **API Design:** Following RESTful principles and JSON:API specification where applicable
- **Database Modeling:** Following MongoDB schema design best practices
- **Frontend Architecture:** Following React best practices and community patterns

### Appendix C: Compliance & Standards
- **Security:** OWASP Top 10 compliance target
- **Accessibility:** WCAG 2.1 AA guidelines for UI components
- **Privacy:** GDPR-inspired data handling practices (consent, right to be forgotten)
- **Industry Standards:** PCI DSS considerations for payment handling (Phase 2)

---

*This document is subject to change as the architecture evolves based on technical feasibility, performance testing, and stakeholder feedback.*