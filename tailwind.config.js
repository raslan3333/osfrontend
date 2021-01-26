const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors,

        extend: {

            minWidth: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                '300': '300px',
            },
            maxWidth: {
                '500': '500px',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['group-focus'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),

    ],
}

