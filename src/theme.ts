import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `Lato, sans-serif`,
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
