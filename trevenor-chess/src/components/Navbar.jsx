import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  Image,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

export default function Navbar() {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show navbar after passing 100vh
      if (window.scrollY >= window.innerHeight) {
        setShowFixedNavbar(true);
      } else {
        setShowFixedNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ================= INITIAL HERO NAVBAR ================= */}
      {!showFixedNavbar && (
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          zIndex="100"
          p={"25px"}
          mb={15}
          bg="0B1120"
          color="white"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" gap={3}>
         
              
              <Heading color="#22C55E">♔</Heading>
              <Heading
                fontSize={{ base: "20px", md: "30px" }}
                color={"white"}
              >
                TREVONAR
              </Heading>
            </Flex>

            <Stack
              display={{ base: "none", xl: "flex" }}
              alignItems={"center"}
              direction="row"
              spacing="45px"
              color="grey"
              fontSize="17px"
              fontWeight="600"
            >
              <Button bg={"none"} color={"white"} to="/">Home</Button>
              <Button bg={"none"} color={"white"} to="/about">About Us</Button>
              <Button bg={"none"} color={"white"}  to="/courses">FAQ</Button>
              
        
            </Stack>
            <Stack>
              <Button
              display={{ base: "none", xl: "flex" }}
              position="relative"
              overflow="hidden"
              bgColor="#22C55E"
              color="white"
              borderRadius="full"
              px={10}
              py={7}
              textAlign={"center"}
              fontWeight="bold"
              zIndex={1}
              _before={{
                content: '""',

                position: "absolute",

                left: "0",
                top: "-100%",

                width: "100%",
                height: "0%",

                bg: "black",

                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",

                transition: "height 0.7s ease-in-out, top 0.7s ease-in-out",

                zIndex: -1,
              }}
              sx={{
                "&:hover::before": {
                  top: "0%",
                  height: "180%",
                },

                "&:not(:hover)::before": {
                  top: "-100%",
                  height: "0%",
                },
              }}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
              }}
              transition="0.3s ease"
            >
              Launch Soon
            </Button>
            <IconButton
              display={{base: "flex" , xl:"none"}}
              icon={isMenuOpen ? <FiX /> : <FiMenu />}
              aria-label="Toggle Menu"
              variant="ghost"
              fontSize="26px"
              color="white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            </Stack>

          </Flex>
        </Box>
      )}

      {/* ================= FIXED SCROLL NAVBAR ================= */}
      <MotionBox
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: showFixedNavbar ? 0 : -100,
          opacity: showFixedNavbar ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        position="fixed"
        top="0"
        left="0"
        w="100%"
        bg="white"
        boxShadow="lg"
        p={"30px"}
        zIndex="1000"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap={3}>
            
            <Heading fontSize={{ base: "20px", md: "30px" }} color={"#0B1120"}>
              Trevonar
            </Heading>
          </Flex>

          <Stack
            direction="row"
            spacing="50px"
            color="gray.700"
            fontSize="17px"
            fontWeight="600"
            display={{ base: "none",lg : "flex" }}
          >
            <Button to="/">Home</Button>
            <Button to="/about">About </Button>
            <Button to="/courses">FAQ</Button>
           
          </Stack>

          <Button
            display={{ base: "none", md: "flex" }}
            position="relative"
            overflow="hidden"
            bgGradient="linear(to-r, #0047FF, #00A6FF)"
            color="white"
            borderRadius="full"
            px={10}
            py={7}
            fontWeight="bold"
            zIndex={1}
            _before={{
              content: '""',

              position: "absolute",

              left: "0",
              top: "-100%",

              width: "100%",
              height: "0%",

              bg: "black",

              borderBottomLeftRadius: "50%",
              borderBottomRightRadius: "50%",

              transition: "height 0.7s ease-in-out, top 0.7s ease-in-out",

              zIndex: -1,
            }}
            sx={{
              "&:hover::before": {
                top: "0%",
                height: "180%",
              },

              "&:not(:hover)::before": {
                top: "-100%",
                height: "0%",
              },
            }}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
            }}
            transition="0.3s ease"
          >
            Free Training
          </Button>
              <IconButton
              icon={isMenuOpen ? <FiX /> : <FiMenu />}
              aria-label="Toggle Menu"
              variant="ghost"
              fontSize="26px"
              color="white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
        </Flex>
      </MotionBox>
      {isMenuOpen && (
        <MotionBox
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
          }}
          display={{ xl: "none" }}
          position="fixed"
          top={showFixedNavbar ? "100px" : "90px"}
          left="0"
          w="100%"
          bg="white"
          boxShadow="lg"
          zIndex="999"
          p={6}
          backdropFilter="blur(20px)"
          borderBottom="1px solid rgba(0,0,0,.08)"
        >
          <VStack spacing={6} align="stretch" fontWeight="600">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>

            <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
              Our Courses
            </Link>

            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              Our Products
            </Link>

            <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>

            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>

            <Button
              bgGradient="linear(to-r,#0047FF,#00A6FF)"
              color="white"
              borderRadius="full"
            >
              Free Training
            </Button>
          </VStack>
        </MotionBox>
      )}
    </>
  );
}
