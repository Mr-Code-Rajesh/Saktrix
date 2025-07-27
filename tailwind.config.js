// tailwind.config.js
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}", // ✅ Include all relevant files
];
export const darkMode = 'class';
export const theme = {
  colors: {
    silver: '#C0C0C0',
  },
  animation: {
    'spin-slow': 'spin 10s linear infinite',
  },
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [
  
];
