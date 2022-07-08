import React from "react";
import { createTheme, PaletteColorOptions } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    gray: PaletteColorOptions;
    progressCompleted: PaletteColorOptions;
  }
  interface PaletteOptions {
    gray: PaletteColorOptions;
    progressCompleted: PaletteColorOptions;
  }
}
declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    gray: true;
    progressCompleted: true;
  }
}
const { palette } = createTheme();
export const theme = createTheme({
  palette: {
    gray: palette.augmentColor({
      color: { main: "#E1ECFC" },
    })
    , progressCompleted: palette.augmentColor({ color: { main: "#DFE8F6" } })
    , secondary: { main: "#22C870" }
  },
  typography: {
    h1: {
      fontFamily: "CeraProBold",
      fontSize: "36px",
      lineHeight: "45px"
    },
    subtitle1: {
      fontFamily: "CeraProLight",
      fontSize: "36px",
      lineHeight: "45px"
    },
    subtitle2: {
      fontFamily: "CeraProMedium",
      fontSize: "16px",
      lineHeight: "24px"
    },
    body1: {
      fontFamily: "CeraProMedium",
      fontSize: "16px",
      lineHeight: "24px"
    },
    body2: {
      fontFamily: "CeraProLight",
      fontSize: "16px",
      lineHeight: "24px"
    },
    caption: {
      fontFamily: "CeraProLight",
      fontSize: "14px",
      lineHeight: "22px"
    },
  },
});
