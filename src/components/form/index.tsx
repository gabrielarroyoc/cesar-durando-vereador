import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Spacer,
  VStack,
  HStack,
  Textarea,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

export function Form() {
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
          <Box
            m="10rem"
            bgColor={"white"}
            w={isMobile ? "100%" : "50%"}
            h="50%"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
          >
            <FormControl pt="2rem" ml="2rem" w={isMobile ? "100%" : "50%"}>
              <HStack spacing={6}>
                <Input
                  required={true}
                  variant="flushed"
                  type="Nome"
                  borderColor="blue.500"
                  color="black"
                  placeholder="Primeiro Nome*"
                  onChange={handleInputChange}
                />
                <Input
                  mt="1rem"
                  variant="flushed"
                  color="black"
                  borderColor="blue.500"
                  placeholder="Sobrenome*"
                  type="Sobrenome"
                  onChange={handleInputChange}
                />
              </HStack>
              <HStack spacing={6}>
                <Input
                  mt="1rem"
                  variant="flushed"
                  color="black"
                  borderColor="blue.500"
                  placeholder="Email*"
                  type="Email"
                  onChange={handleInputChange}
                />
                <Input
                  mt="1rem"
                  variant="flushed"
                  color="black"
                  borderColor="blue.500"
                  placeholder="Telefone*"
                  type="Fone"
                  onChange={handleInputChange}
                />
              </HStack>
              <Textarea
                mt="1rem"
                variant="flushed"
                color="black"
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
                aaaaaa
              </Button>
              <Box bgColor="blue.500"></Box>
            </FormControl>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
