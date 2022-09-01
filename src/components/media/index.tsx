import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

export function Media() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  return (
    <Flex
      bgImage="https://uploaddeimagens.com.br/images/004/001/268/original/fundo_media.png?1661785060"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      className="Media"
      w="100%"
    >
      <Box pt={isMobile ? "20rem" : "13rem"} h="2000px" w="600px">
        <VStack ml={isMobile ? "7rem" : "7rem"} align={"left"}>
          <Text color={"white"} fontSize="48px">
            Videos
          </Text>
          <Divider w="180px" orientation="horizontal" />
          <Image
            pt="20px"
            w="70%"
            src="https://uploaddeimagens.com.br/images/004/001/371/original/c%C3%A9sar-durando.jpg?1661788760"
          />
          <Text color={"white"} fontSize="48px">
            Fotos
          </Text>

          <Divider w="180px" orientation="horizontal" />
          <Image
            w="70%"
            pt="20px"
            src="https://uploaddeimagens.com.br/images/004/001/375/original/101839669_606440430298896_8345816835228672043_n.jpg?1661788976"
          />
        </VStack>
      </Box>
    </Flex>
  );
}
