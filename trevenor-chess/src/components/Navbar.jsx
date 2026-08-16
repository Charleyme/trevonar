import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";

import { FaChessKnight } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Tournaments", href: "#tournaments" },
  { name: "Leaderboard", href: "#leaderboard" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bgColor={"black"}
      backdropFilter="blur(15px)"
      
    >
      <Flex
        maxW="1200px"
        mx="auto"
        h="76px"
        px={6}
        align="center"
        justify="space-between"
      >
        {/* LOGO */}
        <HStack spacing={3}>
          <Flex
            w="40px"
            h="40px"
            align="center"
            justify="center"
            borderRadius="10px"
            bg="green.500"
            color="white"
            boxShadow="0 0 25px rgba(34, 197, 94, 0.35)"
          >
            <FaChessKnight size={21} />
          </Flex>

          <Text
            fontSize={{ base: "18px", md: "21px" }}
            fontWeight="700"
            color="white"
          >
            Trevonar{" "}
            <Text as="span" color="green.400">
              Chess
            </Text>
          </Text>
        </HStack>

        {/* DESKTOP NAVIGATION */}
        <HStack
          spacing={7}
          display={{ base: "none", lg: "flex" }}
        >
          {navLinks.map((link) => (
            <Text
              key={link.name}
              as="a"
              href={link.href}
              color="gray.300"
              fontSize="14px"
              fontWeight="500"
              position="relative"
              _hover={{
                color: "green.400",
              }}
            >
              {link.name}
            </Text>
          ))}
        </HStack>

        {/* DESKTOP ACTIONS */}
        <HStack
          spacing={3}
          display={{ base: "none", lg: "flex" }}
        >
          <Button
            variant="ghost"
            color="gray.300"
            _hover={{
              color: "white",
              bg: "whiteAlpha.100",
            }}
          >
            Login
          </Button>

          <Button
            colorScheme="green"
            px={5}
            _hover={{
              transform: "translateY(-1px)",
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
            }}
          >
            Sign Up
          </Button>
        </HStack>

        {/* MOBILE MENU BUTTON */}
        <IconButton
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
          aria-label="Open navigation"
          icon={<FiMenu size={24} />}
          variant="ghost"
          color="white"
          fontSize="24px"
          _hover={{
            bg: "whiteAlpha.100",
          }}
        />
      </Flex>

      {/* MOBILE DRAWER */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent
          bg="#080D1C"
          color="white"
        >
          <DrawerHeader
            borderBottom="1px solid"
            borderColor="whiteAlpha.100"
          >
            <Flex
              align="center"
              justify="space-between"
            >
              <HStack spacing={3}>
                <Flex
                  w="38px"
                  h="38px"
                  align="center"
                  justify="center"
                  borderRadius="9px"
                  bg="green.500"
                >
                  <FaChessKnight />
                </Flex>

                <Text fontWeight="700">
                  Trevonar{" "}
                  <Text as="span" color="green.400">
                    Chess
                  </Text>
                </Text>
              </HStack>

              <CloseButton
                onClick={onClose}
                color="white"
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody pt={8}>
            <VStack
              align="stretch"
              spacing={2}
            >
              {navLinks.map((link) => (
                <Text
                  key={link.name}
                  as="a"
                  href={link.href}
                  onClick={onClose}
                  px={4}
                  py={4}
                  borderRadius="8px"
                  color="gray.300"
                  fontSize="16px"
                  _hover={{
                    color: "white",
                    bg: "whiteAlpha.100",
                  }}
                >
                  {link.name}
                </Text>
              ))}

              <Box
                mt={6}
                pt={6}
                borderTop="1px solid"
                borderColor="whiteAlpha.100"
              >
                <VStack spacing={3}>
                  <Button
                    w="100%"
                    variant="outline"
                    color="white"
                    borderColor="whiteAlpha.300"
                  >
                    Login
                  </Button>

                  <Button
                    w="100%"
                    colorScheme="green"
                  >
                    Sign Up
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}