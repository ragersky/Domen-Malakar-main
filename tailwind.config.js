export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Orbitron", "sans-serif"], // Added sans-serif fallback
      secondary: ["Rajdhani", "sans-serif"], // Added sans-serif fallback
      tertiary: ["Aldrich", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        /* Barve texta, ki se briše sproti */
        primary: "#eab308" /* vijočina #0a0a0a */,
        accent: "#f59e0b" /* vijočina kinda B809C3 */,
      },
      // Background image: Nekaj temnega naj bo, zaenkrat generic grafika
      backgroundImage: {
        site: "url('./assets/temni-background.png')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
