const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    purge: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                primary: '#ff9500',
                secondary: '#352d22',
            },
            fontFamily: {
                sans: ["Vazirmatn", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}