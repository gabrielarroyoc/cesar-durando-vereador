import { Box, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { Buttons } from "../button/index";

export function Home() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");

  return (
    <Flex w="100%" pt="200px">
      <Box
        ml={isMobile ? "2rem" : "7rem"}
        mt={{ base: "-50px", md: "-200px", lg: "-200px", xl: "-120px" }}
        mb="200px"
        h={{
          base: "200px",
          md: "500px",
          lg: "500px",
          xl: "24rem",
          "2xl": "34rem",
        }}
        w="100%"
      >
        <Text color="white" fontSize={isMobile ? "19px" : "28px"}>
          Trabalhando em Petrolina com
        </Text>
        <Text
          lineHeight={1}
          fontSize={isMobile ? "40px" : "60px"}
          color="white"
          as="b"
        >
          Experiência e <br />
          Compromisso
        </Text>
        <Text color="white" fontSize={isMobile ? "19px" : "28px"}>
          Acompanhe mais do nosso trabalho <br />
          em Petrolina
        </Text>
        <HStack spacing={8} pt="20px">
          <Link _hover={{ textDecoration: "none" }} href="#contato">
            <Buttons
              color="white"
              variant="outline"
              borderRadius="30"
              _hover={{ bgColor: "white", color: "blueCesar.500" }}
              w={isMobile ? "150px" : "186px"}
              h="48px"
              label="Entre em contato"
            ></Buttons>
          </Link>
          <Link
            href="#sobre"
            transition={"ease-in-out"}
            _hover={{ color: "blueCesar.500" }}
            color="white"
          >
            Ajude Cesar
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}
