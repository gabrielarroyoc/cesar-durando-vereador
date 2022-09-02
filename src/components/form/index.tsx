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
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Form() {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ui3d42d",
        "template_9xtsr7q",
        e.target,
        "UBAiwnzjHhlLwJLwC"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  return (
    <>
      <Flex
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
          <HStack p="20" borderRadius={"30px"} bgColor={"white"} w="60%">
            <FormControl
              ref={form}
              onSubmit={sendEmail}
              pt="2rem"
              w={isMobile ? "100%" : "50%"}
            >
              <Text>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</Text>
              <HStack w="100%" h="auto" spacing={6}>
                <VStack w="100%" h="auto" spacing={5}>
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
                    placeholder="Email"
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
                    placeholder="Sobrenome"
                    type="Sobrenome"
                    onChange={handleInputChange}
                  />
                  <Input
                    isRequired
                    variant="flushed"
                    color="black"
                    borderColor="blue.500"
                    placeholder="Telefone"
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
                placeholder="Mensagem"
                onChange={handleInputChange}
              />
              <Button
                mt="2rem"
                bgColor="blue.500"
                color="black"
                type="submit"
                aria-label="enviar"
                onSubmit={sendEmail}
              >
                ENVIAR
              </Button>
            </FormControl>
            <Box w="40%" h="500px" borderRadius="30" bgColor="blue.500"></Box>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
