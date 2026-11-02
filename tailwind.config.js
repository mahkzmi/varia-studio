/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-bg)",
        panel: "var(--color-panel)",
        paper: "var(--color-text)",
        dim: "var(--color-muted)",
        signal: "var(--color-accent)",
        line: "var(--color-line)"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(185, 202, 139, .10)"
      },
      animation: {
        "rise": "rise .8s cubic-bezier(.2,.7,.2,1) both",
        "marquee": "marquee 32s linear infinite",
        "blink": "blink 1.8s ease-in-out infinite"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        blink: {
          "0%, 100%": { opacity: ".35" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
