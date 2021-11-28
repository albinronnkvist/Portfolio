const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
    './firebase/**/*.{js,ts,jsx,tsx}'
  ],
   darkMode: 'class',
   theme: {
     extend: {
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '50': 50,
        '75': 75,
        '100': 100,
        'auto': 'auto',
      },
      transitionProperty: {
        'width': 'width'
      },
      animation: {
        menuSlide: 'fadeIn 500ms ease-in-out',
        menuSlideClose: 'fadeOut 500ms ease-in-out',
        closeSlide: 'opacityFadeIn 500ms ease-in-out',
        armWiggle: 'armWiggle 2s ease-in-out infinite',
        textShake: 'textShake 1s ease-in-out infinite',
        textVideo: 'textVideo 2s ease-in-out infinite',
        moveLeft: 'moveLeft 2s ease-in-out infinite',
        moveRight: 'moveRight 2s ease-in-out infinite',
        scale: 'scale 2s ease-in-out infinite',
        scale2: 'scale2 2s ease-in-out infinite'
      },

      keyframes: theme => ({
        fadeIn: {
          '0%': { width: 0 },
          '100%': { width: '66%' },
        },
        fadeOut: {
          '0%': { width: '66%' },
          '100%': { width: 0 },
        },
        opacityFadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
        armWiggle: {
          '0%, 100%': { transform: 'rotate(-0.25deg)' },
          '50%': { transform: 'rotate(0.25deg)' }
        },
        textShake: {
          '0%': { transform: 'skewX(-1deg)' },
          '5%': { transform: 'skewX(1deg)' },
          '10%': { transform: 'skewX(-1deg)' },
          '15%': { transform: 'skewX(1deg)' },
          '20%': { transform: 'skewX(0deg)' },
          '100%': { transform: 'skewX(0deg)' }  
        },
        textVideo: {
          '0%': { transform: 'translateX(-0.5px)', transform: 'translateY(0.5px)' },
          '10%': { transform: 'translateX(0px)', transform: 'translateY(0px)' },
          '20%': { transform: 'translateX(0.5px)', transform: 'translateY(-1px)' },
          '30%': { transform: 'translateX(0px)', transform: 'translateY(-0.5px)' },
          '40%': { transform: 'translateX(-0.5px)', transform: 'translateY(1px)' },
          '50%': { transform: 'translateX(-1eg)', transform: 'translateY(0px)' },
          '60%': { transform: 'translateX(0px)', transform: 'translateY(1.5px)' },
          '70%': { transform: 'translateX(-5px)', transform: 'translateY(-5px)' },
          '80%': { transform: 'translateX(3px)', transform: 'translateY(4px)' },
          '90%': { transform: 'translateX(0px)', transform: 'translateY(0px)' },
          '100%': { transform: 'translateX(-1px)', transform: 'translateY(-1px)' },
        },
        moveLeft: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-5px)' }
        },
        moveRight: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' }
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' }
        },
        scale2: {
          '0%, 100%': { transform: 'scale(1.5)' },
          '50%': { transform: 'scale(1)' }
        }
      })
     },
     fontSize: {
      'xxs': '.6rem',
      'xs': '.75rem',
      'tiny': '.8rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
     },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        darker: '#00632f',
        dark2: '#1aa975',
        dark: '#2ebd89',
        default: '#34D399',
        light: '#48d7a3'
      },
      black: {
        dark: '#0d120e',
        light: '#141616'
      },  
      gray: {
        dark: '#111213',
        light: '#141c16',
        light2: '#3a503e',
        light3: '#b5cab9'
      },
      white: '#F0EAD6',
      indigo: colors.indigo,
      red: '#ff0033',
      yellow: colors.amber,
      blue: colors.blue
    }
   },
   variants: {
     extend: {
      filter: ['hover', 'focus']
     },
   },
   plugins: [],
 }
