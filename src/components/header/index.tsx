import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";

import { Button } from "../button/index";
import { Menu } from "../menu";

export function Header() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const NavButtons = () => {
    {
      return (
        <HStack gap="8">
          <Link color="white">Trajetória</Link>
          <Link color="white">Media</Link>
          <Link color="white">Projetos de Lei</Link>
          <Link color="white">Contato</Link>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Button
            textColor="white"
            color="#0065AB"
            borderRadius="30"
            _focus={{
              bg: "blueCesar.500",
            }}
            label="CONTRIBUIR"
          ></Button>
        </HStack>
      );
    }
  };
  return (
    <Flex
      m="0 7rem 0 7rem"
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="100%"
        maxW={{
          base: "425px",
          md: "720px",
          lg: "1080px",
          xl: "1800px",
        }}
        flexDirection={{
          base: "row",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
        p="1rem"
      >
        <Image src="https://uploaddeimagens.com.br/images/003/997/375/original/logo.png?1661478464"></Image>
        <HStack>
          {isMobile ? (
            <Menu
              options={[
                { label: "Início", link: "/" },
                { label: "Sobre", link: "/about" },
                { label: "Projetos", link: "/" },
                { label: "Contato", link: "/" },
              ]}
            />
          ) : (
            <NavButtons />
          )}
        </HStack>
      </Flex>
    </Flex>
  );
}
