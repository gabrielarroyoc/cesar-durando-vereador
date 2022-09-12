import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
import { Flex, VStack, Button, Link } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Media } from "./components/media";
import { Projects } from "./components/projects";
import { SocialMedia } from "./components/socialMedia";
import { Form } from "./components/form";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { ParallaxBanner } from "react-scroll-parallax";

function App({ children, value, onChange }: any) {
  useEffect(() => {
    emailjs.init("UBAiwnzjHhlLwJLwC");
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250,
    });
  }, []);

  return (
    <>
      <Flex
        bgImage="https://uploaddeimagens.com.br/images/004/019/854/original/fundo_home.png?1663017069"
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
