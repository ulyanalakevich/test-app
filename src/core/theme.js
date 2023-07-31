import { createTheme } from "@mui/material";

const Colors = {
  white: "#FFFFFF",
  electricBlue: "#1D77FF",
  greyBlue: "#6A6E9F",
  midnight: "#171829",
  midnightBlue: {
    700: "#1F2031",
    600: "#2A2C48",
  },
  lightGreyBlue: "#D9DCFB",
};

export const theme = createTheme({
  palette: {
    background: {
      default: Colors.midnight,
    },
    common: {
      white: Colors.white,
    },
    primary: {
      main: Colors.greyBlue,
      electricBlue: Colors.electricBlue,
      midnightBlue700: Colors.midnightBlue[700],
      midnightBlue600: Colors.midnightBlue[600],
      lightGreyBlue: Colors.lightGreyBlue,
    },
    secondary: {
      main: Colors.electricBlue,
    },
  },
  typography: {
    fontFamily: "Manrope",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  fontSize: {
    xxsmall: "12px",
    xsmall: "14px",
    small: "16px",
    medium: "18px",
    large: "24px",
  },
  lineHeight: {
    xxsmall: "16px",
    xsmall: "20px",
    small: "24px",
    large: "32px",
  },
  shape: {
    borderRadius: 16,
  },
});
