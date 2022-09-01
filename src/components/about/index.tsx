import {
  useMediaQuery,
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export function About() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const handleToggle = () => setShow(!show);
  const [show, setShow] = React.useState(false);

  return (
    <Flex
      className="Sobre"
      w="100%"
      gap="10"
      direction={["column", "row", "row", "row"]}
    >
      <Image
        display={{ base: "none", md: "none", lg: "block" }}
        w="30%"
        h="60%"
        ml="7rem"
        pb="8rem"
        src="https://uploaddeimagens.com.br/images/004/001/167/original/conhe%C3%A7a.png?1661783358"
      />

      <VStack
        align={"left"}
        ml={isMobile ? "4rem" : "11rem"}
        w={isMobile ? "80%" : "40%"}
      >
        <Text as="b" color="blueCesar.500" fontSize="48px">
          Conheça Cesar Durando
        </Text>
        <Divider
          borderColor="gray.500"
          w={isMobile ? "300px" : "540px"}
          orientation="horizontal"
        />
        <Box pt="2rem">
          <Collapse animateOpacity={true} startingHeight={200} in={show}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            praesentium possimus deserunt illum quo quia a eum voluptate
            accusantium deleniti cupiditate, repellendus laudantium ullam
            commodi assumenda alias natus laborum quas. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quasi praesentium possimus
            deserunt illum quo quia a eum voluptate accusantium deleniti
            cupiditate, repellendus laudantium ullam commodi assumenda alias
            natus laborum quas. <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            praesentium possimus deserunt illum quo quia a eum voluptate
            accusantium deleniti cupiditate, repellendus laudantium ullam
            commodi assumenda alias natus laborum quas. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut, sunt, eos omnis distinctio
            incidunt temporibus ea cumque ipsa maiores, consequuntur voluptates
            quasi nobis possimus maxime? Quisquam mollitia porro corporis
            dicta!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            sunt, eos omnis distinctio incidunt temporibus ea cumque ipsa
            maiores, consequuntur voluptates quasi nobis possimus maxime?
            Quisquam mollitia porro corporis dicta!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ut, sunt, eos omnis distinctio
            incidunt temporibus ea cumque ipsa maiores, consequuntur voluptates
            quasi nobis possimus maxime? Quisquam mollitia porro corporis
            dicta!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
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
          bgColor={"blueCesar.500"}
          _hover={{ bg: "gray.200" }}
          _active={{
            bg: "blueCesar.500",
          }}
        >
          Mostrar {show ? "menos" : "mais"}
        </Button>
      </VStack>
    </Flex>
  );
}
