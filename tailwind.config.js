/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#0cda31",
                  
          "secondary": "#fc3aec",
                  
          "accent": "#61dd6b",
                  
          "neutral": "#332b3b",
                  
          "base-100": "#EFEFF6",
                  
          "info": "#9FBFE5",
                  
          "success": "#1CCEA8",
                  
          "warning": "#AE5C04",
                  
          "error": "#DE543F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

