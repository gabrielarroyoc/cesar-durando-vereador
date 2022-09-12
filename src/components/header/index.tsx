import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  Button,
  Spacer,
  useMediaQuery,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";

import { Buttons } from "../button/index";

export function Header() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const NavButtons = () => {
    {
      return (
        <HStack gap="8">
          <Link
            _hover={{ color: "blueCesar.500" }}
            fontSize="18px"
            color="white"
            href="#sobre"
          >
            Trajetória
          </Link>
          <Link
            fontSize="18px"
            _hover={{ color: "blueCesar.500" }}
            color="white"
            href="#socialmedia"
          >
            Social Media
          </Link>
          <Link
            fontSize="18px"
            _hover={{ color: "blueCesar.500" }}
            color="white"
            href="#projetos"
          >
            Projetos
          </Link>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Buttons
            textColor="white"
            bgColor="blueCesar.500"
            borderRadius="30"
            _hover={{ bgColor: "whiteCesar.500", color: "blueCesar.500" }}
            label="CONTATO"
          ></Buttons>
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
        <Link href="">
          <Image
            alt="cesar-durando"
            src="https://uploaddeimagens.com.br/images/003/997/375/original/logo.png?1661478464"
          />
        </Link>

        <HStack>
          {isMobile ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<HamburgerIcon />}
              ></MenuButton>
              <MenuList>
                <MenuItem>Trajetória</MenuItem>
                <MenuItem>
                  <Link>Social Media</Link>
                </MenuItem>
                <MenuItem>Projetos</MenuItem>
                <MenuItem>Contato</MenuItem>
                <MenuItem>Contribuir</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <NavButtons />
          )}
        </HStack>
      </Flex>
    </Flex>
  );
}
