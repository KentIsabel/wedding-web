# Isabel & Kent Wedding Invitation Website

An elegant and modern wedding invitation website designed for Isabel and Kent's wedding.

## 🌟 Features

### 📱 Responsive Design
- Perfectly adapts to desktop, tablet and mobile devices
- Modern mobile navigation menu
- Smooth touch gesture support

### ⏰ Real-time Countdown
- Wedding countdown accurate to the second
- Auto-updates without page refresh
- Elegant digital display effects

### 🎨 Visual Design
- Elegant gradient backgrounds
- Three-image showcase area (customizable images)
- Warm color theme
- Smooth animation effects
- Modern card design

### 📍 Wedding Information
- Religious ceremony and reception details
- Complete timeline arrangement
- Location information (can link to maps)

### 💝 Gift Suggestions
- Rain of envelopes option
- Bank account information
- Elegant presentation

## 📁 File Structure

```
wedding-website/
├── index.html              # Main page (gradient background version)
├── demo-with-images.html   # Image version demo page
├── styles.css              # Style file
├── script.js               # JavaScript functionality
├── README.md              # Documentation
└── images/                # Images folder
    └── README.md          # Image usage instructions
```

## 🚀 Quick Start

1. **Download Files**
   ```bash
   git clone [repository-url]
   cd wedding-website
   ```

2. **Local Run**
   - **Gradient Background Version**: Open `index.html` directly in browser
   - **Image Version**: Open `demo-with-images.html` to view version with images
   - Or use local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Customize Content**
   - Modify couple names, dates, etc. in `index.html`
   - Update wedding date in `script.js`
   - Adjust color theme in `styles.css`
   - Add actual images in `images/` folder
   - Modify image paths in CSS to use actual images

## 🎯 Customization Guide

### Modify Wedding Information
In `index.html`:
```html
<!-- Couple Names -->
<h1>Isabel</h1>
<span class="and">&</span>
<h1>Kent</h1>

<!-- Wedding Date -->
<div class="wedding-date">March 22, 2026</div>
```

### Update Countdown Date
In `script.js`:
```javascript
const weddingDate = new Date('2026-03-22T15:30:00').getTime();
```

### Modify Color Theme
In `styles.css`:
```css
/* Main Colors */
--primary-color: #d4af37;
--secondary-color: #f4d03f;
```

### Add Actual Images
1. Place image files in `images/` folder
2. Modify image paths in `styles.css`:
```css
.image-section-1 {
    background-image: url('images/barbara-photo.jpg');
    background-size: cover;
    background-position: center;
}
```

## 📱 Mobile Optimization

- Responsive navigation menu
- Touch-friendly button design
- Optimized font sizes and spacing
- Smooth scrolling experience

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📧 Contact Information

For customization or technical support, contact:
- Email: your-email@example.com
- Phone: +1-234-567-8900

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

💕 Congratulations to Isabel and Kent! 💕 