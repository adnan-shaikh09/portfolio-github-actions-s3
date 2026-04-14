# Aryan Shah — Developer Portfolio Website

A fully responsive, modern portfolio website built with pure **HTML, CSS, and JavaScript** — no frameworks, no dependencies.

## ✨ Features

- **Page Loader** — Animated percentage counter on load
- **Custom Cursor** — Smooth laggy-follow cursor with hover effects
- **Dark / Light Mode** — Toggle with localStorage persistence
- **Sticky Navbar** — Scrolls, highlights active section, mobile hamburger menu
- **Hero Section** — Animated floating card with live stat counters
- **Infinite Marquee** — Scrolling tech stack ticker
- **Scroll Reveal** — Elements animate in as you scroll
- **Skill Bars** — Animated on scroll into view
- **Project Filter** — Filter by category (Web, UI/UX, Full Stack)
- **Testimonial Slider** — Auto-advancing with dot navigation
- **Contact Form** — Client-side validation + success state
- **Toast Notifications** — Lightweight feedback toasts
- **Fully Responsive** — Mobile, tablet, desktop

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML structure
├── style.css        # All styles + CSS variables + responsive
├── script.js        # All interactivity + data
└── README.md        # This file
```

## 🚀 Getting Started

### Option 1 — Open directly
Just open `index.html` in any browser. No build step needed.

### Option 2 — Live Server (recommended)
```bash
# If you have VS Code, install the Live Server extension
# Right-click index.html → Open with Live Server
```

### Option 3 — Python simple server
```bash
cd portfolio
python -m http.server 8000
# Visit http://localhost:8000
```

## 🎨 Customization

### Change your name / info
Edit the content directly in `index.html`.

### Change colors / theme
Open `style.css` and edit the `:root` CSS variables at the top:
```css
:root {
  --accent: #5b3cf5;   /* Primary accent color */
  --accent2: #f53c8a;  /* Secondary accent (gradient) */
  --bg: #f8f7f4;       /* Background */
  /* ... */
}
```

### Add/edit projects
Open `script.js` and edit the `projects` array:
```js
const projects = [
  {
    title: 'Your Project Name',
    desc: 'Short description here.',
    tags: ['React', 'Node.js'],
    category: ['web', 'fullstack'],
    emoji: '🚀',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    liveUrl: 'https://yourproject.com',
    codeUrl: 'https://github.com/you/project',
  },
  // ...
];
```

### Add/edit testimonials
Edit the `testimonials` array in `script.js`.

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set Source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/repo-name`

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styles | CSS3 (custom properties, grid, flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Syne + Outfit) |
| Hosting | GitHub Pages |

## 📄 License

MIT License — free to use, modify, and distribute.

---

Built with ♥ in Ahmedabad, India
