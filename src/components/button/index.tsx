import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props extends ButtonProps {
  label: string;
  link?: string;
}

export function Buttons({ label, link, ...rest }: Props) {
  return (
    <ChakraButton h="44px" w="160px" colorScheme="blueCesar.500" {...rest}>
      {link ? <Link to={link}>{label}</Link> : label}
    </ChakraButton>
  );
}
