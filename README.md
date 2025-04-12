# Personal CV

This project is a personal CV web application built using Next.js and TypeScript. It showcases skills and experiences in Linux administration, web development, and cybersecurity.

## Project Structure

```
personal-cv
├── public
│   ├── profile.jpg          # Optional: Your profile picture
│   ├── favicon.ico          # Favicon for the application
│   ├── site.webmanifest     # Web manifest for PWA support
├── src
│   ├── components           # Contains reusable components
│   │   ├── Footer.tsx       # Footer component with copyright and links
│   │   ├── Header.tsx       # Header component with logo and navigation
│   │   └── Layout.tsx       # Layout component wrapping main content
│   ├── pages                # Contains application pages
│   │   ├── _app.tsx         # Custom App component for global styles
│   │   ├── _error.tsx       # Custom error page
│   │   ├── api              # API routes
│   │   │   └── example.ts   # Example API route
│   │   └── index.tsx        # Main entry point with CV sections
│   ├── styles               # Contains CSS styles
│   │   ├── Footer.module.css # Styles for Footer component
│   │   ├── globals.css      # Global styles for the application
│   │   ├── Header.module.css # Styles for Header component
│   │   └── Home.module.css   # Styles for Home component
├── tsconfig.json            # TypeScript configuration
├── package.json             # npm configuration
├── next.config.js           # Next.js configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd personal-cv
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```bash
   http://localhost:3000
   ```

## Features

- **Responsive Design**: Optimized for all devices to present your CV professionally.
- **Customizable Sections**: Includes "About Me," "Skills," "Career Goals," and "Contact."
- **Reusable Components**: Modular components for easy customization.
- **API Integration**: Example API route for server-side functionality.
- **Error Handling**: Custom error page for better user experience.
- **SEO-Friendly**: Includes metadata and manifest for improved search engine visibility.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **CSS Modules**: Scoped CSS for styling components.
- **React**: Component-based UI library.
- **Tailwind CSS** (optional): Utility-first CSS framework for rapid UI development.

## Deployment

This application is deployed on **Heroku**. To deploy updates:
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update application"
   ```
2. Push to Heroku:
   ```bash
   git push heroku main
   ```

## License

This project is open-source and available under the MIT License.