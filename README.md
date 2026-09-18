# Touché de Gateau Demo

An Arabic RTL e-commerce frontend demo built with Angular and custom SCSS for a cake and bakery shop.

The project provides a complete shopping interface for bakery and cake products, including product browsing, category filtering, search, product details, cart management, and a responsive checkout flow.

## Live Demo

https://touche-de-gateau-demo.vercel.app

## Overview

Touché de Gateau Demo was built as a frontend demonstration of an Arabic e-commerce experience for a cake and bakery shop.

The application provides product browsing, category filtering, search, product details, cart management, and a complete checkout UI through a responsive RTL interface.

The project is frontend-only and does not include a production backend, real payment gateway, or persistent order storage.

## Project Highlights

- Arabic RTL user interface
- Angular standalone components
- Custom UI built without external UI component libraries
- Responsive layout for desktop, tablet, and mobile
- Homepage with hero, categories, featured products, about section, and call-to-action
- Product catalog with category filtering and search
- Product details with quantity controls and related products
- Reusable product card component
- Cart state management using Angular Signals
- Cart persistence using localStorage
- Checkout flow with Reactive Forms validation
- Delivery information and payment method selection
- Demo order confirmation state
- Toast notifications for user feedback
- Centralized product and store data
- Route titles and page descriptions
- Accessible labels and focus states

## Main Pages

### Home Page

- Hero section
- Product categories
- Featured products
- Brand and about section
- Call-to-action section
- Customer-facing Arabic content
- Responsive layout
- Footer

### Products Page

- Product grid
- Category filtering
- Search by product name, code, or category
- Product count
- Empty state for no matching results
- Reusable product cards
- Add-to-cart actions

### Product Details Page

- Product image
- Product code and category
- Product name in Arabic and English
- Product description
- Product price
- Quantity controls
- Add-to-cart action
- Product information highlights
- Related products

### Cart Page

- Persistent cart state using localStorage
- Cart items list
- Quantity increase and decrease
- Remove item action
- Clear cart action
- Order summary
- Continue shopping link
- Checkout navigation
- Empty cart state

### Checkout Page

- Customer information form
- Phone number validation
- Delivery city and address fields
- Optional order notes
- Payment method selection
- Order summary
- Reactive form validation
- Demo order confirmation state
- Generated demo order number

## Features

### Product Experience

- Product catalog browsing
- Category filtering
- Product search
- Product details
- Related products
- Quantity selection

### Cart and Checkout

- Add products to cart
- Update product quantities
- Remove individual products
- Clear the entire cart
- Persist cart state across page refreshes
- Order summary calculation
- Checkout form validation
- Payment method selection
- Demo order confirmation

### UI and UX

- Full RTL layout support
- Arabic content and navigation
- Responsive design
- Custom SCSS styling
- Reusable UI components
- Toast notifications
- Empty states
- Accessible form labels
- Keyboard focus states

## Tech Stack

- Angular
- TypeScript
- Angular Router
- Angular Reactive Forms
- Angular Signals
- SCSS
- Lucide Angular
- ngxpert Hot Toast
- localStorage

## Project Structure

```txt
src/app/

├── core/
│   ├── data/
│   │   ├── products.data.ts
│   │   └── store-info.data.ts
│   │
│   ├── models/
│   │   ├── cart-item.model.ts
│   │   └── product.model.ts
│   │
│   └── services/
│       └── cart.service.ts
│
├── features/
│   ├── cart/
│   ├── checkout/
│   ├── home/
│   ├── product-details/
│   └── products/
│
├── shared/
│   └── components/
│       ├── footer/
│       ├── navbar/
│       └── product-card/
│
├── app.config.ts
├── app.html
├── app.routes.ts
├── app.scss
└── app.ts
```

## Architecture

The project follows a feature-based Angular structure.

- `core/data` contains the product catalog and centralized store information.
- `core/models` contains shared TypeScript interfaces used across the application.
- `core/services` contains shared application logic such as cart state management.
- `features` contains page-level areas including home, products, product details, cart, and checkout.
- `shared/components` contains reusable UI components such as the navbar, footer, and product card.

This structure separates shared application logic from page-specific features and keeps the project easy to maintain and extend.

## State Management

Cart state is managed through a shared `CartService` using Angular Signals.

The service handles:

- Adding products
- Increasing and decreasing quantities
- Removing products
- Clearing the cart
- Calculating total items
- Calculating total price
- Saving cart data to localStorage
- Restoring cart data after page refresh

This keeps cart-related logic centralized instead of managing it separately inside individual components.

## Form Handling

The checkout page uses Angular Reactive Forms for form state and validation.

The form includes:

- Customer information
- Phone number validation
- Delivery city
- Delivery address
- Optional order notes
- Payment method selection
- Validation feedback

Submitting a valid form displays a demo success state with a generated order number.

No real order is submitted to a backend.

## UI Feedback

Toast notifications are used for common user interactions, including:

- Adding a product to the cart
- Removing a product from the cart
- Clearing the cart
- Checkout validation errors
- Successful demo order submission

## Responsive Design

The interface is designed to work across desktop, tablet, and mobile screen sizes.

Layouts, navigation, product grids, product details, cart content, and checkout forms adapt to smaller screens while maintaining the Arabic RTL experience.

## Demo Notes

This project was created as a frontend portfolio demo.

The checkout process is a UI demonstration only. It does not submit real orders, process payments, or connect to a production backend.

Product images, product details, prices, and store information are used to provide a realistic cake shop shopping experience.

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed.

The project was generated using Angular CLI version 20.3.15.

### Clone the Repository

```bash
git clone https://github.com/MahmoudMo99/touche-de-gateau-demo.git
cd touche-de-gateau-demo
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
ng serve
```

Open:

```txt
http://localhost:4200
```

### Build

```bash
ng build
```

The build output will be generated in the `dist/` directory.

## Deployment

The project is deployed on Vercel.

Live demo:

https://touche-de-gateau-demo.vercel.app

## Future Improvements

- Connect the checkout flow to a backend API
- Add real order submission and order tracking
- Add WhatsApp order integration
- Add an admin dashboard for product management
- Add favorites or wishlist functionality
- Add product sorting and pagination
- Add unit tests for services and components
- Add dynamic SEO metadata for product routes

## Author

**Mahmoud Mohamed**

Software Engineer and Angular Frontend Developer.

Built as a portfolio project to demonstrate Angular development, Arabic RTL interfaces, responsive e-commerce layouts, reusable component design, cart state management, and checkout flow implementation.
