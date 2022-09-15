import {
  Flex,
  Input,
  Button,
  Box,
  HStack,
  Textarea,
  Text,
  useMediaQuery,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephone, BsTwitter, BsInstagram } from "react-icons/bs";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Form() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_ui3d42d",
        "template_9xtsr7q",
        form.current,
        "UBAiwnzjHhlLwJLwC"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  return (
    <>
      <Flex
        id="contato"
        bgImage="https://uploaddeimagens.com.br/images/004/001/444/original/final_fundo.png?1661790964"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        filter="auto"
        backgroundPosition={{ base: "70% 50%", md: "center", lg: "center" }}
        className="container"
        w="100%"
        bottom="0"
        h="120vh"
      >
        <Flex
          w="100%"
          borderRadius="30"
          color="white"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <HStack
            h="500px"
            pl="4rem"
            pr={isMobile ? "0rem" : "0"}
            justifyContent="center"
            borderRadius={"30px"}
            bgColor={"white"}
            w={isMobile ? "80%" : "60%"}
            gap="100px"
          >
            <Flex
              direction="column"
              ref={form}
              justifyContent={"center"}
              as="form"
              onSubmit={(e) => sendEmail(e)}
              w={isMobile ? "60%" : "50%"}
            >
              <Stack
                justifyContent={"center"}
                direction={["column", "column", "row"]}
                spacing={6}
              >
                <Stack direction={["column", "column"]} spacing={5}>
                  <Input
                    isRequired
                    required={true}
                    variant="flushed"
                    type="text"
                    name="user_name"
                    borderColor="blue.500"
                    color="black"
                    placeholder="Primeiro Nome*"
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    variant="flushed"
                    color="black"
                    borderColor="blue.500"
                    placeholder="Email*"
                    type="email"
                    name="user_email"
                    onChange={handleInputChange}
                  />
                </Stack>
                <Stack
                  pl={isMobile ? "0rem" : "2rem"}
                  direction={["column", "column"]}
                  spacing={5}
                >
                  <Input
                    isRequired
                    variant="flushed"
                    color="black"
                    borderColor="blue.500"
                    placeholder="Sobrenome*"
                    type="Sobrenome"
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    variant="flushed"
                    color="black"
                    borderColor="blue.500"
                    placeholder="Telefone*"
                    type="tel"
                    name="telefone"
                    onChange={handleInputChange}
                  />
                </Stack>
              </Stack>
              <Textarea
                isRequired
                variant="flushed"
                color="black"
                name="message"
                borderColor="blue.500"
                placeholder="Mensagem*"
                onChange={handleInputChange}
              />

              <Button
                maxW={"160px"}
                borderRadius="30"
                mt="2rem"
                color="white"
                type="submit"
                aria-label="enviar"
                textTransform={"uppercase"}
                bgColor={"blueCesar.500"}
                _hover={{
                  bgColor: "gray.400",
                  color: "blueCesar.500",
                }}
              >
                ENVIAR
              </Button>
            </Flex>
            <Box
              ml="4rem"
              p="1.75rem"
              w="40%"
              h="500px"
              borderRadius="30"
              bgColor="blue.500"
              pt={isMobile ? "20" : "0"}
            >
              <Box
                display={{ base: "none", md: "none", lg: "block" }}
                mt="6"
                ml="10"
              >
                <Text as="b" fontSize={isMobile ? "10px" : "28px"}>
                  Contato
                </Text>

                <Text
                  pt="2rem"
                  fontSize={{
                    base: "10px",
                    md: "10px",
                    lg: "11px",
                    "2xl": "15px",
                  }}
                >
                  <Icon mr="2" as={BsTelephone} />
                  (87) 3862-9279
                </Text>
                <Text
                  pr="2rem"
                  fontSize={{
                    base: "10px",
                    md: "10px",
                    lg: "10px",
                    "2xl": "15px",
                  }}
                >
                  <Icon pt="2px" mr="2" as={AiOutlineMail} />
                  cesar.durando@yahoo.com.br
                </Text>
              </Box>

              <Box mt="20">
                <Stack>
                  <Text
                    pl="10"
                    display={{ base: "none", md: "none", lg: "block" }}
                    as="b"
                    fontSize={isMobile ? "10px" : "25px"}
                  >
                    Siga-nos nas redes sociais
                  </Text>
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={["column", "column", "column", "row"]}
                  >
                    <Link isExternal href="https://twitter.com/CesarDurando">
                      <BsTwitter />
                    </Link>

                    <Link
                      isExternal
                      href="https://www.facebook.com/cesar.durando.52"
                    >
                      <FaFacebookF />
                    </Link>

                    <Link
                      isExternal
                      href="https://www.instagram.com/cesardurando/"
                    >
                      <BsInstagram />
                    </Link>

                    <Link
                      isExternal
                      href="https://www.youtube.com/channel/UCchFOh206y3e_Y2A2YNl24A/videos"
                    >
                      <AiOutlineYoutube fontSize={"23px"} />
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
