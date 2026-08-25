# Touché de Gateau Demo

An Arabic RTL e-commerce frontend demo built with Angular and custom SCSS for a Saudi cake shop.

The project presents a clean shopping experience for bakery and cake products, including homepage sections, product catalog, product details, cart, and checkout flow.

## Live Demo

https://touche-de-gateau-demo.vercel.app

## Overview

Touché de Gateau Demo was built as a frontend demonstration for an Arabic cake shop experience.

The application focuses on presenting real product catalog content through a polished RTL interface, responsive layouts, product browsing, cart interactions, and a complete checkout UI flow.

The project is frontend-only and does not include a real backend, payment gateway, or persistent order storage.

## Project Highlights

- Arabic RTL user interface
- Custom UI built without external UI component libraries
- Elegant bakery/cake shop visual design
- Homepage with hero, categories, featured products, about section, and call-to-action
- Products listing page
- Product category filtering
- Product details page
- Cart page
- Quantity controls
- Remove item from cart
- Checkout form UI
- Delivery information section
- Payment method selection UI
- Responsive design for desktop, tablet, and mobile
- Real product catalog content used in the demo

## Main Pages

### Home Page

- Hero section
- Product categories
- Featured products
- Brand/about section
- Call-to-action section
- Footer

### Products Page

- Product grid
- Category filters
- Search input
- Product cards
- Add-to-cart actions

### Product Details Page

- Product image
- Product name and description
- Product price
- Quantity controls
- Add-to-cart button
- Related products

### Cart Page

- Cart items
- Quantity controls
- Remove item action
- Order summary
- Continue shopping link
- Checkout navigation

### Checkout Page

- Customer information form
- Delivery address form
- Order notes
- Payment method selection
- Order summary

## Features

- RTL layout support
- Arabic content and navigation
- Responsive product cards
- Product category filtering
- Product details view
- Cart state handling
- Product quantity management
- Checkout UI flow
- Clean visual hierarchy
- Soft colors and elegant typography
- Mobile-friendly layout

## Tech Stack

- Angular
- TypeScript
- Angular Router
- SCSS
- Custom Responsive UI
- RTL UI
- Vercel

## Project Structure

```txt
src/app/
├── core/
│   ├── data/
│   ├── models/
│   └── services/
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

## Architecture Notes

The project follows a simple feature-based Angular structure.

- `core` contains shared data, models, and services.
- `features` contains page-level business areas such as home, products, cart, checkout, and product details.
- `shared/components` contains reusable UI components such as navbar, footer, and product card.

This keeps the project organized and easy to extend as the demo grows.

## Demo Notes

This project was created as a frontend demo.

The checkout process is a UI demonstration only. It does not submit real orders, process payments, or connect to a production backend.

Product images and product details are used to demonstrate a realistic cake shop shopping experience.

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

## Deployment

The project is deployed on Vercel.

Live demo:

https://touche-de-gateau-demo.vercel.app

## Author

**Mahmoud Mohamed**

Software Engineer and Angular Frontend Developer.

This project was built to demonstrate Arabic RTL frontend development, custom responsive e-commerce UI design, cart interactions, and checkout flow implementation using Angular.
