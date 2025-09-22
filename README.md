# React + Tailwind Product Listing Project

This is a React + Vite project styled with Tailwind CSS.  
It recreates a **pixel-accurate product listing screen** from Figma with fully working **filters, sorting, pagination, and search**.  
The layout is **responsive** across desktop, tablet, and mobile.

---

## Features

### 1. Reusable Components
- Navbar, Sidebar, FilterPanel, ProductCard, Badge, Rating, Pagination, Footer
- Configurable via props and matches Figma design style
- Components are reusable across the project

### 2. Sidebar Filters
- Categories expand/collapse intuitively
- Color selector filter with visual feedback on ProductCard
- Shows at least 6 items per category (placeholders or “View more” if fewer)

### 3. Product Listing Grid
- ProductCard includes:
  - Product image (placeholder images used if needed)
  - HOT badge when applicable
  - Title
  - Original price, discount price, discount percent
  - Rating (stars + count)
- Fully responsive grid layout matching Figma spacing and breakpoints

### 4. Search Functionality
- Search products by **name**
- Updates product listing in real-time as the user types

### 5. Sorting & Pagination
- Sort by Name, Price, Popularity (ascending/descending)
- Pagination updates content without full reloads
- Sorting and pagination states are synced (URL query params recommended)

### 6. Responsiveness
- Desktop, tablet, and mobile layouts
- Sidebar collapses into a drawer on smaller screens
- Tested on edge widths: 320px, 768px, 1024px

### 7. Footer
- Layout, links, and spacing match the Figma design exactly

### 8. Data & State
- Mock dataset of 24+ products with fields:


## Setup & Run Instructions (For Viewer)

Follow these steps to run the project locally:

1. **Clone the repository:**
git clone https://github.com/ritiksahu06/Job_Assignment.git

2. **Go into the project folder:**
cd Job_Assignment

3. **Install all dependencies:**
npm install

4. **Start the development server:**
npm run dev

5. **Open the project in your browser:**
Visit http://localhost:5173
 to see the app running.

 ## Live Demo

You can view the deployed project here: [Job Assignment Live](https://job-assignment-murex.vercel.app/)
