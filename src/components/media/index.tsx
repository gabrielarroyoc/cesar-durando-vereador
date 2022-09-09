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
  Grid,
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
        data-aos-delay={600}
        pt={isMobile ? "20rem" : "13rem"}
        h="2000px"
        w="600px"
      >
        <VStack ml={isMobile ? "4rem" : "7rem"} pr="2rem" align={"left"}>
          <Text color={"white"} fontSize="48px">
            Videos
          </Text>
          <Divider w="180px" orientation="horizontal" />
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              width="400"
              height="100"
              src="https://www.youtube.com/embed/_NmScoclcgo"
              title="Cesar Durando"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>
        </VStack>
        <Stack ml={isMobile ? "4rem" : "7rem"}>
          <Text color={"white"} fontSize="48px">
            Fotos
          </Text>

          <Divider w="180px" orientation="horizontal" />
          <Grid
            ml="4rem"
            gap="4"
            mt="1rem"
            w={isMobile ? "100%" : "100%"}
            templateColumns={{
              base: "repeat(1, 15rem)",
              md: "repeat(3, 12rem)",
              lg: "repeat(4, 14rem)",
              xl: "repeat(4, 20rem)",
            }}
          >
            <Image
              w="100%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/464/original/1.png?1662142551"
            />
            <Image
              w="100%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/436/original/119560797_678431303099808_8415759730511567755_n.jpg?1662142010"
            />
            <Image
              w="100%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/455/original/3.png?1662142368"
            />
            <Image
              w="100%"
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/491/original/Sem_T%C3%ADtulo-1.png?1662143308"
            />
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/486/original/4.png?1662143244"
            />
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/488/original/5.png?1662143258"
            />
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/008/543/original/cesar_durando.png?1662144820"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/418/original/1.jpeg?1662673035"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/419/original/2.jpeg?1662673053"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/420/original/3.jpeg?1662673059"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/421/original/4.jpeg?1662673081"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/422/original/5.jpeg?1662673100"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/424/original/7.jpeg?1662673113"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/427/original/9.jpeg?1662673152"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/428/original/10.jpeg?1662673305"
            ></Image>
            <Image
              w="100%"
              display={{ base: "none", md: "block" }}
              pt="20px"
              src="https://uploaddeimagens.com.br/images/004/015/429/original/11.jpeg?1662673315"
            ></Image>
          </Grid>
        </Stack>
      </Box>
    </Flex>
  );
}
