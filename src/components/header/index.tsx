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
  IconButton,
  VStack,
  CSSReset,
} from "@chakra-ui/react";
import React from "react";

import { Buttons } from "../button/index";

export function Header() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const NavButtons = () => {
    {
      return (
        <HStack w="100%" gap="8">
          <Link
            _hover={{ color: "blueCesar.500" }}
            fontSize="18px"
            color="white"
            href="#sobre"
          >
            TRAJETÓRIA
          </Link>
          <Link
            fontSize="18px"
            _hover={{ color: "blueCesar.500" }}
            color="white"
            href="#socialmedia"
          >
            SOCIAL MEDIA
          </Link>
          <Link
            fontSize="18px"
            _hover={{ color: "blueCesar.500" }}
            color="white"
            href="#projetos"
          >
            PROJETOS
          </Link>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Link href="#contato">
            <Buttons
              textColor="white"
              bgColor="blueCesar.500"
              borderRadius="30"
              _hover={{ bgColor: "whiteCesar.500", color: "blueCesar.500" }}
              label="CONTATO"
            ></Buttons>
          </Link>
        </HStack>
      );
    }
  };
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
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
            <>
              <CSSReset />
              <Menu>
                <MenuButton as={MenuButton} aria-label="Options">
                  <HamburgerIcon />
                </MenuButton>
                <MenuList>
                  <VStack>
                    <MenuItem>
                      <Link href="#sobre">
                        <Button>Trajetória</Button>
                      </Link>
                    </MenuItem>
                    <Link href="#socialmedia">
                      <Button>Social Media</Button>
                    </Link>
                    <Link href="#projetos">
                      <Button>Projetos</Button>
                    </Link>
                    <Link href="#contato">
                      <Button>Contato</Button>
                    </Link>
                  </VStack>
                </MenuList>
              </Menu>
            </>
          ) : (
            <NavButtons />
          )}
        </HStack>
      </Flex>
    </Flex>
  );
}
