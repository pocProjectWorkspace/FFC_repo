import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      colors: {
        pomegranate: {
          50: "#fdf0f1",
          100: "#fbe0e3",
          200: "#f7c2c7",
          300: "#f3a3ab",
          400: "#f3818b",
          500: "#e05e6a",
          600: "#c94551",
          700: "#983a45",
          800: "#762c36",
          900: "#541e27",
          950: "#3d1a1f",
          DEFAULT: "#983a45"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "4px",
          medium: "8px",
          large: "12px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#983a45", // POMEGRANATE BACKGROUND
            foreground: "#FFFFFF", // WHITE TEXT
            focus: "#f3818b", // ROSE FOR FOCUS
            content1: {
              DEFAULT: "#983a45", // POMEGRANATE
              foreground: "#FFFFFF" // WHITE TEXT
            },
            content2: {
              DEFAULT: "#762c36", // DARKER POMEGRANATE
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#c94551", // LIGHTER POMEGRANATE
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#541e27", // DARKEST POMEGRANATE
              foreground: "#FFFFFF"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)" // WHITE DIVIDERS
            },
            primary: {
              50: "#fdf0f1",
              100: "#fbe0e3",
              200: "#f7c2c7",
              300: "#f3a3ab",
              400: "#f3818b", // ROSE
              500: "#e05e6a",
              600: "#c94551",
              700: "#983a45", // MAIN POMEGRANATE
              800: "#762c36",
              900: "#541e27",
              950: "#3d1a1f",
              DEFAULT: "#983a45", // POMEGRANATE
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#fdf0f1",
              100: "#fbe0e3",
              200: "#f7c2c7",
              300: "#f3a3ab",
              400: "#f3818b", // ROSE
              500: "#e05e6a",
              600: "#c94551",
              700: "#983a45",
              800: "#762c36",
              900: "#541e27",
              DEFAULT: "#f3818b", // ROSE AS SECONDARY
              foreground: "#FFFFFF"
            },
            default: {
              50: "#ffffff",
              100: "#f8f8f8",
              200: "#f0f0f0",
              300: "#e0e0e0",
              400: "#c0c0c0",
              500: "#a0a0a0",
              600: "#808080",
              700: "#58595b", // GREY FOR SUBTLE TEXT
              800: "#444444",
              900: "#2a2a2a",
              DEFAULT: "#FFFFFF", // WHITE AS DEFAULT
              foreground: "#983a45" // POMEGRANATE TEXT ON WHITE
            },
            success: {
              DEFAULT: "#2d5a27",
              foreground: "#FFFFFF"
            },
            warning: {
              DEFAULT: "#b8860b",
              foreground: "#FFFFFF"
            },
            danger: {
              DEFAULT: "#8b0000",
              foreground: "#FFFFFF"
            }
          }
        },
        dark: {
          colors: {
            background: "#1a0f11", // VERY DARK POMEGRANATE
            foreground: "#FFFFFF",
            focus: "#f3818b",
            content1: {
              DEFAULT: "#3d1a1f", // DARK POMEGRANATE
              foreground: "#FFFFFF"
            },
            content2: {
              DEFAULT: "#541e27",
              foreground: "#FFFFFF"
            },
            content3: {
              DEFAULT: "#762c36",
              foreground: "#FFFFFF"
            },
            content4: {
              DEFAULT: "#983a45",
              foreground: "#FFFFFF"
            },
            primary: {
              50: "#fdf0f1",
              100: "#fbe0e3",
              200: "#f7c2c7",
              300: "#f3a3ab",
              400: "#f3818b",
              500: "#e05e6a",
              600: "#c94551",
              700: "#983a45",
              800: "#762c36",
              900: "#541e27",
              DEFAULT: "#f3818b", // BRIGHTER IN DARK MODE
              foreground: "#1a0f11"
            }
          }
        }
      }
    })
  ]
}