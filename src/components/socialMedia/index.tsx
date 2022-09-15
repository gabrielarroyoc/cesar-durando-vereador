import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

export function SocialMedia() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className="SocialMedia"
      bgColor="white"
      w="100%"
      id="socialmedia"
      data-aos="fade-right"
      data-aos-delay={500}
    >
      <Box mt={isMobile ? "10rem" : "0rem"} mb="10rem">
        <Text as="b" color="blue.500" fontSize="48px">
          Social Media
        </Text>
        <Divider
          borderColor="grey.500"
          w="300px"
          pt="20px"
          orientation="horizontal"
        />
        <Stack
          mt="2rem"
          direction={["column", "column", "column", "row"]}
          alignItems="center"
        >
          <Image
            borderRadius={20}
            boxShadow="dark-lg"
            alt="cesar-durando"
            src="https://uploaddeimagens.com.br/images/004/001/386/original/social_media_fundo.png?1661789308"
          />
          <Image
            borderRadius={20}
            boxShadow="dark-lg"
            alt="cesar-durando"
            src="https://uploaddeimagens.com.br/images/004/001/390/original/social_media_foto.png?1661789401"
          />
          <Image
            borderRadius={20}
            boxShadow="dark-lg"
            alt="cesar-durando"
            src="https://uploaddeimagens.com.br/images/004/001/391/original/social_media_foto_3.png?1661789535"
          />
          <Image
            borderRadius={20}
            boxShadow="dark-lg"
            alt="cesar-durando"
            src="https://uploaddeimagens.com.br/images/004/001/393/original/social_media_foto_4.png?1661789635"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
