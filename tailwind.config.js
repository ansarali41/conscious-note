/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'repeating-red-transparent': 'repeating-linear-gradient(90deg, #FE8522 0 15px, transparent 0 32px)',
            },
            colors: {
                'brand-orange': '#FE8522',
                'brand-orange-light': '#ffca9f',
                'brand-yellow-light': '#fff8f0',
                'brand-gray': ' #7D7D83',
                'brand-blue': '#0A1740',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                spaceGrotesk: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
