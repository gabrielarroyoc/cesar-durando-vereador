import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
  useMediaQuery,
  HStack,
  Stack,
  AspectRatio,
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
      <Box
        data-aos="fade-right"
        data-aos-delay={200}
        pt={isMobile ? "20rem" : "13rem"}
        h="2000px"
        w="600px"
      >
        <VStack ml={isMobile ? "7rem" : "7rem"} align={"left"}>
          <Text color={"white"} fontSize="48px">
            Videos
          </Text>
          <Divider w="180px" orientation="horizontal" />
          <AspectRatio maxW="560px" ratio={1 / 1}>
            <iframe
              width="400"
              height="100"
              src="https://www.youtube.com/embed/_NmScoclcgo"
              title="Cesar Durando"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>
          <Text color={"white"} fontSize="48px">
            Fotos
          </Text>

          <Divider w="180px" orientation="horizontal" />
          <Stack
            spacing={8}
            direction={["column", "column", "column", "row"]}
            w={isMobile ? "100%" : ""}
          >
            <Image
              w="70%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/464/original/1.png?1662142551"
            />
            <Image
              w="70%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/436/original/119560797_678431303099808_8415759730511567755_n.jpg?1662142010"
            />
            <Image
              w="70%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/455/original/3.png?1662142368"
            />
            <Image
              w="70%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/491/original/Sem_T%C3%ADtulo-1.png?1662143308"
            />
          </Stack>
          <Stack
            spacing={8}
            direction={["column", "column", "column", "row"]}
            w={isMobile ? "100%" : ""}
          >
            <Image
              w="70%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/486/original/4.png?1662143244"
            />
            <Image
              w="70%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/488/original/5.png?1662143258"
            />
            <Image
              w="70%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/543/original/cesar_durando.png?1662144820"
            ></Image>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
}
