# Ma Première App

A modern React application showcasing a portfolio website with multiple pages including Home, Services, Portfolio, Contact and Legal information.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- **Multi-page Navigation**: Built with React Router for seamless page transitions
- **Responsive Design**: Uses Bootstrap for responsive layouts across devices
- **Modern UI Components**: Custom navbar, footer, and page-specific components
- **Contact Form**: Interactive contact functionality
- **Portfolio Showcase**: Display your work and projects

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install NPM packages
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Project Structure

```
src/
├── assets/       # Static assets like images and icons
├── components/   # Reusable UI components
│   ├── Footer.jsx
│   └── Navbar.jsx
├── pages/        # Page components
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   └── Legales.jsx
├── App.js        # Main application component
└── index.js      # Application entry point
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Dependencies

- React 19.1.0
- React Router 7.5.0
- Bootstrap 5.3.5
- React Bootstrap 2.10.9
- Bootstrap Icons 1.11.3
- React Icons 5.5.0

## Deployment

This application can be deployed to various platforms:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

See the [React deployment documentation](https://create-react-app.dev/docs/deployment/) for more information.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
