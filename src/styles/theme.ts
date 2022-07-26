export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '2.4rem'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#920000',
    white: '#FFF',
    red: '#FF0101',
    blue: '#2B2D42',
    green: '#06D6A0',
    yellow: '#D1B53F',
    black: '#1E252B',
    mainBg: '#F7F7FF',
    gray: '#282B32',
    lightGray: '#B3ABBC',
    disabled: '#EAEAEA'
  },
  gradients: {
    blue: 'linear-gradient(100.65deg, #FF0101 -10.44%, #920000 116.63%);'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
    header: 5
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadows: {
    default: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    tabNavigator: 'rgba(25, 1, 52, 0.16) 0px 4px 10px '
  }
} as const
