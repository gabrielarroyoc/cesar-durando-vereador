import {
  Collapse,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  useMediaQuery,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";

export function Projects() {
  const handleToggle = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      className="Projetos"
      alignItems="center"
      w="100%"
    >
      <Image
        mt="0"
        display={{ base: "none", md: "block" }}
        w="50%"
        h="200%"
        src="https://uploaddeimagens.com.br/images/004/001/306/original/projetos.png?1661785819"
      />
      <VStack
        align={"left"}
        mb="2rem"
        w="47%"
        ml={isMobile ? "0rem" : "1rem"}
        mt={isMobile ? "5rem" : "0rem"}
      >
        <Text color="blue.500" as="b" fontSize="48px">
          Projetos de Lei
        </Text>
        <Divider borderColor="grey.200" w={isMobile ? "200px" : "330px"} />
        <Box pt="2rem">
          <Collapse animateOpacity={true} startingHeight={155} in={show}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            corrupti neque vel! Facere quod voluptatum sunt repellendus corrupti
            libero aliquid, sed quis earum nobis ipsam. Nobis, at quasi! Illo,
            vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            sunt, eos omnis distinctio incidunt temporibus ea cumque ipsa
            maiores, consequuntur voluptates quasi nobis possimus maxime?
            Quisquam mollitia porro corporis dicta! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum corrupti neque vel! Facere quod
            voluptatum sunt repellendus corrupti libero aliquid, sed quis earum
            nobis ipsam. Nobis, at quasi! Illo, vero. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut, sunt, eos omnis distinctio
            incidunt temporibus ea cumque ipsa maiores, consequuntur voluptates
            quasi nobis possimus maxime? Quisquam mollitia porro corporis dicta!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            corrupti neque vel! Facere quod voluptatum sunt repellendus corrupti
            libero aliquid, sed quis earum nobis ipsam. Nobis, at quasi! Illo,
            vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            sunt, eos omnis distinctio incidunt temporibus ea cumque ipsa
            maiores, consequuntur voluptates quasi nobis possimus maxime?
            Quisquam mollitia porro corporis dicta!
          </Collapse>
        </Box>
        <Button
          maxW={"160px"}
          borderRadius="30"
          onClick={handleToggle}
          mt="1rem"
          textTransform={"uppercase"}
          color="white"
          isActive={true}
          bg={"blueCesar.500"}
          _hover={{ bg: "gray.200" }}
          _active={{
            bg: "grayCesar.500",
          }}
        >
          Mostrar {show ? "menos" : "mais"}
        </Button>
      </VStack>
    </Flex>
  );
}
