import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
    theme: {
        extend: {
            backgroundImage: {
                'repeating-red-transparent': 'repeating-linear-gradient(90deg, #FE8522 0 15px, transparent 0 32px)',
            },
            colors: {
                'brand-bg': '#F6EFE5',
                'brand-orange': '#EA523C',
            },
            fontFamily: {
                UniSans: ['Uni-Sans'],
                Akkurat: ['Akkurat'],
                PPEditorialNew: ['PP-Editorial-New'],
                PPEditorialNewUltraBold: ['PP-Editorial-New-ultra-bold'],
            },
            scale: {
                250: '2.50',
            },
        },
    },
    plugins: [flowbite.plugin()],
};
