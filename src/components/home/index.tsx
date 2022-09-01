import { Box, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { Button } from "../button/index";

export function Home() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");

  return (
    <Flex w="100%">
      <Box ml={isMobile ? "3rem" : "7rem"} mt="100px" h="900px" w="100%">
        <Text color="white" fontSize={isMobile ? "19px" : "28px"}>
          Trabalhando em Petrolina com
        </Text>
        <Text fontSize={isMobile ? "40px" : "60px"} color="white" as="b">
          Experiência e <br />
          Compromisso
        </Text>
        <Text color="white" fontSize={isMobile ? "19px" : "28px"}>
          Acompanhe mais do nosso trabalho <br />
          em Petrolina
        </Text>
        <HStack pt="20px">
          <Button
            color="white"
            variant="outline"
            borderRadius="30"
            w={isMobile ? "150px" : "186px"}
            h="48px"
            label="Ajude Cesar"
          ></Button>
          <Link color="white">Mais sobre mim</Link>
        </HStack>
      </Box>
    </Flex>
  );
}
