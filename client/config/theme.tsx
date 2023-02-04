import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});
export default theme;
