# ICISST 2026 - Conference Website

A modern, responsive website for the **International Conference on Intelligent Systems & Sustainable Technologies (ICISST 2026)** hosted by Vidya Academy of Science & Technology.

## 🎯 Features

- **Modern UI/UX**: Built with Tailwind CSS for a sleek, professional design
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Dynamic Content**: JavaScript-powered dynamic rendering of dates, speakers, and committees
- **Countdown Timer**: Real-time countdown to conference dates
- **Mobile-Friendly**: Optimized mobile navigation and layout

## 📁 Project Structure

```
clg-conf/
├── index.html          # Main HTML file
├── clg_conf.html       # Alternative HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── logo.png            # Conference logo
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clg-conf.git
cd clg-conf
```

2. Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## 🛠️ Customization

### Updating Conference Data

Edit the data in `script.js`:

- **Important Dates**: Modify the `IMPORTANT_DATES` array
- **Speakers**: Update the `SPEAKERS` array
- **Organizing Committee**: Edit the `ORGANIZING_COMMITTEE` array
- **Advisory Committee**: Modify the `ADVISORY_COMMITTEE` array
- **Countdown Date**: Change the `TARGET_DATE` variable

### Styling

- Main styles are in `style.css`
- Tailwind CSS is loaded via CDN in `index.html`
- Custom colors and theme can be modified in `script.js` (Tailwind config)

## 📝 License

This project is created for ICISST 2026 conference. All rights reserved.

## 📧 Contact

For inquiries about the conference:
- Email: icisst@vidyaacademy.ac.in
- Phone: +91 4885 287721

## 🌐 Live Demo

Visit the live website: [GitHub Pages URL will be added after deployment]

---

**Vidya Academy of Science & Technology**  
Thalakkottukara P.O., Thrissur, Kerala, India - 680501
