# 🎄 AYF Christmas Surprise Box

A festive interactive web experience created for the Anglican Youth Fellowship to spread Christmas joy and blessings during the holiday season.

## ✨ About

This project brings the magic of Christmas to life through an interactive "surprise box" experience. Members of the fellowship can click on a beautifully animated gift box to receive a personalized Christmas blessing and enjoy a traditional Christmas carol.

## 🎁 Features

- **Dynamic Wish Generator**: Creates thousands of unique, faith-based Christmas blessings by intelligently combining Biblical phrases and Anglican traditions
- **Animated Gift Box**: Interactive 3D-style gift box with smooth opening animation
- **Christmas Carols**: Random selection of classic Christmas hymns and songs
- **Festive Design**: 
  - Animated falling snow effect
  - Traditional Christmas color scheme (red, green, and gold)
  - Fully responsive design for mobile, tablet, and desktop
- **Reusable Experience**: "Get Another Surprise" button allows unlimited wishes

## 🚀 Live Demo

[Add your GitHub Pages link here once deployed]

## 📋 Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/ayf-christmas-surprise.git
```

2. Navigate to the project folder:
```bash
cd ayf-christmas-surprise
```

3. Open `index.html` in your web browser

## 🎵 Adding Your Own Music

The project currently uses placeholder audio links. To add real Christmas carols:

1. Create a `songs` folder in your project directory
2. Add your MP3 files (e.g., `silent-night.mp3`, `o-holy-night.mp3`)
3. Update the `christmasSongs` array in `script.js`:

```javascript
const christmasSongs = [
    { title: "Silent Night", url: "songs/silent-night.mp3" },
    { title: "O Holy Night", url: "songs/o-holy-night.mp3" },
    // Add more songs...
];
```

**Note**: Ensure you have proper licensing for any audio files you use.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Animations, gradients, and responsive design
- **JavaScript**: Dynamic content generation and interactivity
- **No frameworks required**: Pure vanilla JavaScript for simplicity

## 📱 Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Changing Colors
Edit `style.css` to modify the color scheme:
- Primary red: `#c41e3a`
- Primary green: `#2d5a3d`
- Gold accent: `gold`

### Adding More Wishes
In `script.js`, expand any of these arrays:
- `wishPrefixes`
- `wishMiddles`
- `wishEndings`
- `additionalWishes`

### Modifying Animations
Adjust animation timing in `style.css` under the `@keyframes` sections.

## 🤝 Contributing

This is a fellowship project, but suggestions and improvements are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available for use by church groups and Christian organizations.

## 🙏 Credits

Created with love for the Anglican Youth Fellowship

**Merry Christmas! May God bless you abundantly this season! 🎅✨**

---

*"For unto us a child is born, unto us a son is given" - Isaiah 9:6*
