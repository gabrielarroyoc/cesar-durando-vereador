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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

import { Buttons } from "../button/index";

export function Header() {
  const firstField = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
          <Link _hover={{ textDecoration: "none" }} href="#contato">
            <Buttons
              textColor="white"
              bgColor="blueCesar.500"
              borderRadius="30"
              _hover={{ bgColor: "whiteCesar.500", color: "blueCesar.500" }}
              label="FALE CONOSCO"
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
              <Button colorScheme="transparent" onClick={onOpen}>
                <HamburgerIcon />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                initialFocusRef={firstField}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
                  <DrawerBody>
                    <VStack>
                      <Link href="#sobre" _hover={{ textDecoration: "none" }}>
                        <Button>Trajetória</Button>
                      </Link>
                      <Link
                        href="#socialmedia"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button>Social Media</Button>
                      </Link>
                      <Link
                        href="#projetos"
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button>Projetos</Button>
                      </Link>
                      <Link href="#contato" _hover={{ textDecoration: "none" }}>
                        <Button>Contato</Button>
                      </Link>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
            <NavButtons />
          )}
        </HStack>
      </Flex>
    </Flex>
  );
}
