# Sellou Pricing

A modern, interactive pricing page built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations, 3D hover effects, and a responsive design.

## Features

- 🎨 Modern and clean UI design
- ✨ Smooth animations and transitions using Framer Motion
- 🎮 Interactive 3D hover effects on pricing cards
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Built with Next.js and Tailwind CSS
- 🔄 Monthly/Yearly pricing toggle
- 💰 Dynamic pricing calculations
- 🎯 Feature comparison lists

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React CountUp](https://github.com/glennreyes/react-countup) - Number animations

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:cesarolvr/sellou-pricing.git
cd sellou-pricing
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── Button/      # Button component
│   └── Pricing/     # Pricing components
├── data/            # Static data
└── types/           # TypeScript types
```

## Customization

### Colors and Theme

The project uses CSS variables for theming. You can customize the colors by modifying the variables in your global CSS file:

```css
:root {
  --foreground: #your-color;
  --foreground-primary: #your-color;
  --foreground-secondary: #your-color;
  --foreground-tertiary: #your-color;
}
```

### Pricing Plans

Pricing plans are defined in `src/data/pricing.ts`. You can modify the plans, features, and prices by updating this file.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- César Oliveira - [@cesarolvr](https://github.com/cesarolvr)
