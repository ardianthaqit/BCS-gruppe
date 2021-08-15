module.exports = {
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
  theme: {
    extend: {
      colors:{
        primary:'#CC0000',
        navlink:'#262626',
        colorprimary:'#8B2533',
        bgcolor:'#8B2533',
        cardsbg:'#FAF9F8',
        border:'#EFEFEF',
        lightgrey:'#CBCBCB',
        lightwhite:'rgba(255, 255, 255, 0.9)',
        redlight:'#8B2533',
        blacklight:'#1C1C1C',
        whitegrey:'#F5F5F5',
        darkgrey:'#706F6F',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/7':'88%',
        '10':'1320px',
         '290px':'290px',
         '590px':'590px',
         '920px':'920px',
         '220px':'220px',
      },
      maxHeight: {
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '100': '25rem',
        '75vh': '75vh',
        'bottle': '800px',
        'full': '100%',
        'hero': '800px',
        '1081':'1081px',
      },
      height: {
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem', 
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '34': '8.5rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '72': '18rem',
        '80': '20rem',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '100vh': '100vh',
        '1081':'1081px',
        '95px':'95px',
        '308px':'308px',
        '91px':'91px',
        '220px':'220px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      cardssh:'0px 4px 44px rgba(0, 0, 0, 0.05)',
      
    },
    inset: {
      '-16': '-4rem',
      '60':'60%',
      '15':'15%',
      '30':'30px',
     },
     lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
      '40':'40px',
      '72':'72px',
      '56':'56px', 
     },
     fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      'sm23':'32px',
      '56':'56px',
      '44px':'2.75rem', 
     },
     fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
       light: 300,
       normal: 400,
       medium: 500,
      semibold: 600,
       bold: 700,
      extrabold: 800,
      'extra-bold': 800,
       black: 900,
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
