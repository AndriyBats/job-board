import { createTheme } from '@mui/material/styles'
//////////////////////////////////////////////////

const greyColor = '#F5F5F5'
const darkGreyColor = '#70778B'
const blackColor = '#282828'
const whiteColor = '#FFFFFF'
const errorColor = '#ff0000'
const violetColor = '#6E61EA'
const lightRedColor = '#FAEFEF'
const lightGreyColor = '#D5D5D5'
const lightGreenColor = '#EBF8E8'
const lightVioletColor = '#D9D9EF'
const lighterGreyColor = '#FAFAFA'
const multiInputTextBg = '#E6E6E6'
const transparentGreyColor = '#878D9D'
const darkBlueColor = '#3A4562'
const littleLightGreyColor = 'rgba(161, 177, 219, 0.317343)'
const littleLightGreyColorBorder = 'rgba(85, 105, 158, 0.3)'
const littleLightYelowColor = 'rgba(255, 207, 0, 0.15)'
const littleLightYelowColorBorder = '#FFCF00'

export const theme = createTheme({
  palette: {
    primary: { main: violetColor, light: lightVioletColor },
    text: {
      white: whiteColor,
      primary: blackColor,
      disabled: greyColor,
      darkGrey: darkGreyColor,
      darkBlue: darkBlueColor,
      secondary: transparentGreyColor,
    },
    background: {
      grey: greyColor,
      multiInputTextBg,
      error: errorColor,
      white: whiteColor,
      violet: violetColor,
      lightRed: lightRedColor,
      darkBlue: darkBlueColor,
      lightGrey: lightGreyColor,
      lightGreen: lightGreenColor,
      lighterGrey: lighterGreyColor,
      transparentViolet: lightVioletColor,
      transparentGrey: transparentGreyColor,
      littleLightGrey: littleLightGreyColor,
      littleLightYelow: littleLightYelowColor,
      lightGreyBorder: littleLightGreyColorBorder,
      littleLightYelowBorder: littleLightYelowColorBorder,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          fontFamily: 'Proxima Nova',
        },
      },
    },
    
  },
})
