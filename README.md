# QuickCart

QuickCart is a responsive product-listing page built for a frontend development assignment. It uses the public Fake Store API to display a searchable, filterable collection in a clean and accessible shopping interface.

## Features

- Product fetching from the public Fake Store API
- Responsive product grid with one, two, or four columns
- Synchronized product-title search in the navbar and product section
- Client-side category filtering
- Responsive loading skeleton cards
- Error handling with a retry button
- Friendly empty search and filter state
- Consistent product images and equal-height cards
- Mobile-first layout and keyboard-accessible controls

## Technologies Used

- Next.js 15 (App Router)
- React
- JavaScript
- Plain CSS
- [Fake Store API](https://fakestoreapi.com/)

## Local Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quickcart.git
   ```

2. Open the project folder:

   ```bash
   cd quickcart
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Production Build

Create and run an optimized production build:

```bash
npm run build
npm start
```

## Live Demo

[View the QuickCart live demo](https://your-quickcart-demo.vercel.app)

Replace the placeholder above with the final Vercel URL after deployment.

## Testing Approach

I would test successful and failed API responses, retry behavior, combined search and category filtering, and the empty state. I would also check the layout at mobile, tablet, and desktop widths and verify that links, inputs, filter buttons, and clear buttons work with a keyboard.

## Future Improvements

- Add product detail pages
- Add price and rating sorting
- Add cart functionality
- Perform deeper accessibility testing
- Add automated component and end-to-end tests
