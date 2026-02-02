# 🚀 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and Vite.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)

## ✨ Features

- 🎨 Interactive 3D models with mouse-responsive controls
- 📱 Fully responsive design
- 💌 Contact form with EmailJS
- 🎭 Smooth GSAP animations
- ⚡ Fast performance with Vite

## 🛠️ Tech Stack

- **React** + **Vite** - Frontend framework
- **Three.js** + **React Three Fiber** - 3D graphics
- **TailwindCSS** - Styling
- **GSAP** - Animations
- **EmailJS** - Contact form

## 📦 Quick Start

1. **Clone and install**
   ```bash
   git clone https://github.com/benguinsan/github-portfolio.git
   cd github-portfolio
   npm install
   ```

2. **Set up environment variables**
   
   Create `.env` file:
   ```env
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

Deploys automatically to GitHub Pages on push to `main` branch.

Manual deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/    # Reusable components (3D models, buttons, etc.)
├── sections/      # Page sections (Hero, About, Contact, etc.)
├── constants/     # Data and utilities
└── App.jsx        # Main app
```

## 🎮 3D Models

- **Zaku II** - Main hero model (interactive rotation)
- **React Logo** - Floating React logo
- **Stylized Planet** - Decorative planet

## 📝 Customization

- Update personal info in `src/sections/` and `src/constants/index.js`
- Modify colors in `tailwind.config.js`
- Add 3D models to `public/models/` and create components in `src/components/`

## 📚 Documentation

See [THREEJS_COMPONENTS.md](./THREEJS_COMPONENTS.md) for detailed 3D components documentation.

## 👤 Author

**Nguyen Thanh Phuc**
- 🌐 [Live Portfolio](https://benguinsan.github.io/github-portfolio)
- 📧 mrben1113@gmail.com

---

⭐ Star this repo if you find it helpful!
