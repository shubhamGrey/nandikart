import { createTheme } from "@mui/material";
import "@fontsource/open-sans";
import "@fontsource/roboto";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Open Sans"].join(","),
    h1: {},
    h2: {},
    h3: {
      fontFamily: "Open Sans",
      fontWeight: "800",
      fontSize: "24px",
      lineHeight: "32.68px",
      letterSpacing: "0.8px",
    },
    h4: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "34px",
      lineHeight: "41.99px",
      letterSpacing: ".25px",
    },
    h5: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "32.02px",
    },
    h6: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: ".15px",
    },
    body1: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: ".15px",
    },
    subtitle1: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "28px",
      letterSpacing: ".15px",
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: ".17px",
    },
    button: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "22px",
      letterSpacing: ".46px",
    },
    body2: {
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0.17000000178813934px",
    },
    caption: {
      fontSize: "12px",
      fontFamily: "Open Sans",
      fontWeight: "400",
      lineHeight: "19.92px",
    },
  },
  palette: {
    primary: {
      main: "#222707",
    },
    background: {
      main: "#f1e8db",
    },
  },

  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        // Name of the slot
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "40px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          contained: {
            background: "#004096",
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: "#000000",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#0E336A",
          color: "#fff", // set the font color of the tooltip
          fontFamily: "Open Sans", // set the font family of the tooltip
          fontSize: "10px", // set the font size of the tooltip
          fontWeight: "600",
          lineHeight: "14px",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1280,
      lg: 1700,
      xl: 1920,
    },
  },
});
