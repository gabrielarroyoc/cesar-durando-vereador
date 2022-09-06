import {
  Flex,
  FormControl,
  Input,
  Button,
  Box,
  VStack,
  HStack,
  Textarea,
  Text,
  useMediaQuery,
  Stack,
  Link,
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
            data-aos="fade-right"
            data-aos-delay={200}
            h="500px"
            pl="20"
            borderRadius={"30px"}
            bgColor={"white"}
            w="60%"
            gap="100px"
          >
            <Flex
              direction="column"
              ref={form}
              as="form"
              onSubmit={(e) => sendEmail(e)}
              w={isMobile ? "100%" : "50%"}
            >
              <HStack w="100%" spacing={6}>
                <VStack w="100%" spacing={5}>
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
                </VStack>
                <VStack w="100%" spacing={5}>
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
                </VStack>
              </HStack>
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
                mt="2rem"
                bgColor="blue.500"
                color="black"
                type="submit"
                aria-label="enviar"
              >
                ENVIAR
              </Button>
            </Flex>
            <Box w="40%" h="500px" borderRadius="30" bgColor="blue.500">
              <Box mt="6" ml="10">
                <Text as="b" fontSize={isMobile ? "10px" : "28px"}>
                  Contato
                </Text>
                <Text as="b" fontSize={isMobile ? "10px" : "18px"}>
                  <BsTelephone />
                  (87) 3862-9279
                </Text>
                <Text fontSize={isMobile ? "10px" : "19px"} as="b">
                  <AiOutlineMail /> cesar.durando@yahoo.com.br
                </Text>
              </Box>

              <Box mt="20">
                <VStack>
                  <Text as="b" fontSize={isMobile ? "10px" : "28px"}>
                    Siga-nos nas redes sociais
                  </Text>
                  <HStack>
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
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
