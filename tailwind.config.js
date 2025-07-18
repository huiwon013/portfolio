/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        java: '#007396',
        tomcat: '#FF8000',
        HTML: '#E34F26',
        CSS: '#1572B6',
        Tailwind: '#06B6D4',
        Spring: '#6DB33F',
        Thymeleaf: '#005F0F',
        JavaScript: '#F7DF1E',
        React: '#61DAFB',
        Flutter: '#02569B',
        Dart: '#0175C2',

        Oracle: '#F80000',
        MySQL: '#4479A1',
        Supabase: '#3FCF8E',
        Firebase: '#FFCA28',

        IntelliJ: '#3F51B5',
        Eclipse : '#2C2255',
        VScode: '#007ACC',
        AndroidStudio: '#3DDC84',
        DBeaver: '#372923'

      }
    },
  },
  plugins: [],
}

