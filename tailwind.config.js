/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      dropShadow: {
        'neon': [
          '0 0 2px var(--color)',
          '0 0 4px var(--color)',
          '0 0 25px var(--color)',
        ],
        'neon-active': [
            '0 0 2px rgb(236 72 153)',
            '0 0 4px rgb(236 72 153)',
            '0 0 25px rgb(236 72 153)',
        ],
      },
      boxShadow: {
        'neon': '0 0 5px var(--color), 0 0 10px var(--color), 0 0 20px var(--color)',
        'neon-inner': '0 0 5px var(--color), 0 0 10px var(--color), 0 0 20px var(--color), inset 0 0 5px var(--color), inset 0 0 10px var(--color), inset 0 0 20px var(--color)',
      },
      animation: {
        glow: 'glow 10s infinite linear',
        blink: 'blink 5s infinite linear'
      },
      keyframes: {
        glow: {
          '0%, 30%, 100%': {
            opacity: 0.4,
          },
          '50%, 90%': {
            opacity: 0.7,
          },
          '65%': {
            opacity: 0.2,
          }
        },
        blink: {
          '0%, 30%, 32%, 34%, 100%': {
            opacity: 1,
          },
          '31%, 33%': {
            opacity: 0.3,
          }
        }
      }
    }
  }
}

