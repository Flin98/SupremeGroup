# SupremeGroup Next.js App
This is a Next.js project bootstrapped with create-next-app.

# To run the app in development:

bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Visit http://localhost:3000 in your browser to view the website.

# Component Architecture Overview
The UI is split into reusable components for easier understanding and maintenance:

* Navbar: Navigation bar with scroll-hide behavior, logo, navigation buttons, and a mobile burger menu.

* HeroSection: Landing section with a background video, overlay, and marketing headings.

* CarouselSection: Displays carousels for passenger and commercial vehicle videos, fetches data from local API routes.

* ContactSection: Contact form and company info with a popup on successful submit.

* Footer: Multi-column links, address, copyright, and watermark.

All components are located inside src/components/.

# Responsive Design Strategy
Used Tailwind CSS for responsive layouts (lg:, sm: etc.).

Elements rearrange and resize for mobile, tablet, and desktop.

Carousel section stacks vertically on mobile and displays horizontally on larger screens.

Navigation uses a burger menu on small screens, and buttons on desktop.

# Performance Optimization Techniques
Video tags use autoPlay, loop, and muted to efficiently cycle videos.

Images are loaded with object-contain and set minimal dimensions.

API fetches use async/await within React useEffect for non-blocking data loads.

Only show popups and carousels when required, minimizing unnecessary renders.

# Accessibility Considerations
Navigation buttons have aria-label for screen readers.

Toast popup for form submission uses clear text and keyboard-closable buttons.

Video carousel items are selectable by keyboard tabbing (via button click anywhere on display).

Color contrast (blue, white, black) is maintained for readability.

# Third-Party Libraries Used
Next.js: React-based framework for SSR and routing.

Tailwind CSS: Utility-first CSS for rapid UI development.

No additional libraries like Swiper/React-Carousel were used; the carousel functionality is custom via React state.

# Assumptions and Decisions
Videos for carousels are fetched from /api/PassengerVehicles and /api/CommercialVehicles, which must return JSON with src and title.

Using "use client" for React hooks and dynamic UI interactivity.

Chose Tailwind CSS over traditional CSS for easier responsiveness.

Popup shows only on valid form submissions (ContactSection).

Footer watermark is purely decorative.

# Challenges and Solutions
* Carousel Section Positioning: Difficulty in aligning carousel with text/content for responsiveness. Used flex layouts and Tailwind responsive classes as a workaround.

* Data fetching for carousels: Ensured each section waits for API response before rendering videos and handles loading/error gracefully and avoids unnecessary render.

* Button alignment: Used space-x and padding utility classes to maintain consistent gaps across breakpoints.

# Upcoming Features and Improvements
Add carousel animations (swipe/transition effects).

Integrate actual LinkedIn/social buttons to open real profiles.

Form validation for emails and better error messages.

Refactor API to fetch data from a database.

Add automated accessibility tests.

Improve watermark responsiveness and placement.

# Additional Remarks
This project is ideal for me as beginners wanting to learn Next.js and Tailwind CSS together.
Structure is simple: each section/component are self-contained and can be reused. For further enhancements, explore more advanced carousel libraries and backend integration.
Feedback and suggestions are welcome.
Thank you for checking out this project—your interest means a lot!
