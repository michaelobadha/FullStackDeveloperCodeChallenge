/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all your React files
    "./public/index.html"         // Optional: include index.html
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",     // Tailwind's blue-600
          light: "#3b82f6",       // blue-500
          dark: "#1e40af"         // blue-800
        },
        success: "#22c55e",        // green-500
        danger: "#ef4444",         // red-500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
