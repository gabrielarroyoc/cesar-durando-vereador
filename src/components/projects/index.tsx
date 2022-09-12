import {
  Collapse,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  useMediaQuery,
  Divider,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";

export function Projects() {
  const handleToggle = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  return (
    <Flex
      id="projetos"
      data-aos="fade-right"
      data-aos-delay={600}
      direction={["column", "column", "row", "row"]}
      className="Projetos"
      alignItems="center"
      w="100%"
    >
      <Image
        mt="0"
        display={{ base: "none", md: "block" }}
        w="50%"
        h="200%"
        alt="cesar-durando"
        src="https://uploaddeimagens.com.br/images/004/001/306/original/projetos.png?1661785819"
      />
      <VStack
        align={"left"}
        mb="2rem"
        w="47%"
        ml={isMobile ? "0rem" : "1rem"}
        mt={isMobile ? "5rem" : "0rem"}
      >
        <Text color="blue.500" as="b" fontSize="48px">
          Projetos de Lei
        </Text>
        <Divider borderColor="grey.200" w={isMobile ? "200px" : "330px"} />
        <Box pb="12rem">
          <Collapse animateOpacity={true} startingHeight={120} in={show}>
            <Text fontSize={"20px"}>
              Criação da Semana Municipal de Conscientização da Síndrome de Down
              em Petrolina, com o objetivo de instituir um conjunto de ações
              para a compreensão, apoio, educação, saúde, qualidade de vida,
              trabalho e combate ao preconceito, em relação às pessoas com
              Síndrome de Down, seus familiares, educadores e agentes de saúde.
              Ementa: Projeto de lei n° 032/2022 – 22/03/2022 Reconhecimento que
              o Instituto de Auxilio ao Portador de alterações
              Buco-Maxilo-Faciais – IBM é de utilidade pública. Construção da
              Praça no Bairro Areia Branca.
              <br /> Link para o requerimento:
              <br />
              <Link
                color="teal.500"
                isExternal
                href="https://petrolina.pe.leg.br/camararequerimento/requerimento-no-373-2022-vereador-cesar-durando/ 
"
              >
                https://petrolina.pe.leg.br/camararequerimento/requerimento-no-373-2022-vereador-cesar-durando/
              </Link>
              <br />
              Conheça outros requerimentos:
              <br />
              <Link
                color="teal.500"
                isExternal
                href="https://petrolina.pe.leg.br/vereador/cesar-durando/"
              >
                https://petrolina.pe.leg.br/vereador/cesar-durando/
              </Link>
            </Text>
          </Collapse>
          <Button
            maxW={"160px"}
            borderRadius="30"
            onClick={handleToggle}
            mt="1rem"
            textTransform={"uppercase"}
            color="white"
            bg={"blueCesar.500"}
            _hover={{
              bgColor: "gray.400",
              color: "blueCesar.500",
            }}
          >
            Mostrar {show ? "menos" : "mais"}
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
}
