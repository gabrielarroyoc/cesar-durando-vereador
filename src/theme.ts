import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    Text: `"Lato", sans-serif`,
  },
  colors: {
    whiteCesar: {
      500: "#FFFFFF",
      600: "#F9F9F9",
    },
    error: "red.500",
    blueCesar: {
      500: "#0065AB",
      cinzaCesar: {
        500: "#6D6D6D",
      },
    },
  },
});
