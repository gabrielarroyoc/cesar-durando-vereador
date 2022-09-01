import { Flex, VStack } from "@chakra-ui/react";
import { Button } from "./components/button/index";
import { useState } from "react";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Media } from "./components/media";
import { Projects } from "./components/projects";
import { SocialMedia } from "./components/socialMedia";
import { Form } from "./components/form";

function App({ children, value, onChange }: any) {
  return (
    <>
      <Flex
        bgImage="https://uploaddeimagens.com.br/images/003/998/195/original/fundo_home.png?1661530991"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        filter="auto"
        backgroundPosition={{ base: "70% 50%", md: "center", lg: "center" }}
        className="container"
        w="100vw"
        top="0"
        zIndex="-1"
        position="absolute"
        h="100vh"
      ></Flex>

      <VStack>
        <Header />
        <Home />

        <About />

        <Media />
        <Projects />
        <SocialMedia />
        <Form />
      </VStack>
    </>
  );
}

export default App;
