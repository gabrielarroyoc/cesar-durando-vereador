import {
  useMediaQuery,
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export function About() {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const handleToggle = () => setShow(!show);
  const [show, setShow] = React.useState(false);

  return (
    <Flex
      data-aos="fade-right"
      data-aos-delay={600}
      id="sobre"
      w="100%"
      gap="10"
      direction={["column", "row", "row", "row"]}
    >
      <Image
        display={{ base: "none", md: "none", lg: "block" }}
        w="30%"
        h="60%"
        ml="7rem"
        pb="8rem"
        src="https://uploaddeimagens.com.br/images/004/001/167/original/conhe%C3%A7a.png?1661783358"
      />

      <VStack
        align={"left"}
        ml={isMobile ? "4rem" : "11rem"}
        w={isMobile ? "80%" : "40%"}
      >
        <Text as="b" color="blueCesar.500" fontSize="48px">
          Conheça Cesar Durando
        </Text>
        <Divider
          borderColor="gray.500"
          w={isMobile ? "200px" : "340px"}
          orientation="horizontal"
        />
        <Box pt="2rem">
          <Collapse animateOpacity={true} startingHeight={100} in={show}>
            Natural de Petrolina, o Vereador César Durando é formado em
            odontologia, filho do ex-prefeito Simão Durando, marido e pai de 03
            filhos. Na sua trajetória política, já foi Assessor Parlamentar do
            Deputado Federal Osvaldo Coelho, foi Chefe de Gabinete do
            ex-Prefeito Guilherme Coelho, Secretário de Saúde e Secretário de
            Serviços Públicos de Petrolina. Ex-presidente da Associação
            Brasileira de Odontologia – Regional Petrolina (ABO), ex-Assessor do
            Ministério da Integração Nacional-Diretor da RIDE e ex-Diretor da
            Junta Comercial de Pernambuco. Foi Presidente da Câmara de
            Vereadores de Petrolina, e também Primeiro Secretário da Mesa
            Diretora da Casa. Atualmente, estou no meu 3º Mandato como vereador,
            como presidente da Comissão de Saúde e Secretário da Comissão de
            Finanças da Câmara de Petrolina.
          </Collapse>
        </Box>
        <Button
          maxW={"160px"}
          borderRadius="30"
          onClick={handleToggle}
          mt="1rem"
          textTransform={"uppercase"}
          color="white"
          bgColor={"blueCesar.500"}
          _hover={{
            bgColor: "gray.400",
            color: "blueCesar.500",
          }}
        >
          Mostrar {show ? "menos" : "mais"}
        </Button>
      </VStack>
    </Flex>
  );
}
