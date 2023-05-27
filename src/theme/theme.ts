import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans"].join(","),
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
export default theme;
