// tailwind.config.js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-border': '#30363d',
        'github-text': '#c9d1d9',
        'github-link': '#58a6ff',
        'github-secondary': '#8b949e',
        'github-card': '#161b22',
        'github-card-hover': '#1f2a36',
      },
      keyframes: {
        slideInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideInFromTop: 'slideInFromTop 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
      backgroundColor: ['hover'],
    },
  },
};