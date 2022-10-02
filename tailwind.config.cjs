/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'fantasy-ruins':
                    "linear-gradient(rgba(222, 177, 235, 0.4), rgba( 217, 125, 15 , 0.5)), url('./src/shared/assets/images/fantasy-background.jpg')",
            },
        },
    },
    plugins: [],
};
