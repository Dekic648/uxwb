# UX Principles - Interactive Design Guide

A modern, interactive website inspired by [Laws of UX](https://lawsofux.com/) that presents fundamental UX design principles in an engaging and educational format.

## Features

- **Interactive Cards**: Click on any principle card to view detailed information
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging hover effects and scroll-based animations
- **Filter System**: Filter principles by category (Interaction, Perception, Cognition)
- **Modal Details**: Detailed view of each principle with origin, key takeaways, and examples
- **Contact Form**: Functional contact form with validation

## Included UX Principles

1. **Fitts's Law** - Target acquisition and size/distance relationships
2. **Hick's Law** - Decision time and choice complexity
3. **Jakob's Law** - User expectations and familiar patterns
4. **Miller's Law** - Working memory limitations (7±2 rule)
5. **Tesler's Law** - Conservation of complexity
6. **Von Restorff Effect** - Visual distinctiveness and memory
7. **Aesthetic-Usability Effect** - Perceived usability and visual appeal
8. **Pareto Principle** - 80/20 rule in design prioritization

## Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactions
- **IBM Plex Sans**: Professional typography
- **Local Storage**: Theme preference persistence

## Getting Started

1. Clone or download the project files
2. Open `index.html` in any modern web browser
3. Explore the principles and enjoy the interactive experience!

## Customization

### Adding New Principles

To add new UX principles, edit the `principlesData` array in `script.js`:

```javascript
{
    id: 'unique-id',
    title: 'Principle Name',
    category: 'interaction|perception|cognition',
    description: 'Brief description of the principle',
    origin: 'Historical background and origin',
    keyTakeaways: [
        'Key point 1',
        'Key point 2',
        'Key point 3'
    ],
    examples: [
        'Real-world example 1',
        'Real-world example 2'
    ]
}
```

### Styling Customization

The website uses CSS custom properties for easy theming. Modify the `:root` variables in `styles.css` to change colors, spacing, and other design tokens.

### Content Management

All content is stored in the JavaScript file, making it easy to update without touching HTML. The modular structure allows for easy addition of new principles and categories.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is inspired by Laws of UX and follows similar educational goals. Content is for educational purposes.

## Credits

- Inspired by [Laws of UX](https://lawsofux.com/) by Jon Yablonski
- Typography: [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)
- Icons: Unicode emoji characters
- Design principles based on established UX research and psychology

---

Made with ♥ for designers everywhere
