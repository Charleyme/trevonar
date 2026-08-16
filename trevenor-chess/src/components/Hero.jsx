import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box
      width={"100%"}
      minH="100vh"
      display="flex"
      flexDirection={{base: "column"}}
      pt={20}
      px={{base:20, md: 16}}
      textAlign={{base: "center", md: "left"}}
      bgColor={"black"}
    
    >
      <Stack
        direction={{
          base:"column",
          md:"row"
        }}
        spacing={16}
        align="center"
      >
        <Box flex="1">
          <Text
            fontSize="40px"
            color="white"
            fontWeight="bold"
          >
           Test Your Skills.<br></br>Climb the Leaderboard.
          </Text>

          <Heading
            size="2xl"
            lineHeight="1.2"
            color="#22C55E"
          >
            Earn Real Rewards.
          </Heading>

          <Text
            mt={6}
            color="gray.300"
            fontSize="lg"
          >
            Compete in tournaments, outplay worthy<br></br> opponents, and earn real rewards as you rise to the top
          </Text>

          <Stack
            direction="row"
            mt={8}
          >
            <Button
              position="relative"
              overflow="hidden"
              bgGradient="linear(to-r, #22C55E, #22C55E)"
              color="white"
              size={{base: "md", md: "lg"}}
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
             Join our Community
            </Button>

            <Button
              size={{base: "md", md: "lg"}}
              variant="outline"
              color="white"
            >
              Learn More
            </Button>
          </Stack>
        </Box>

        <MotionBox
          flex="1"
          animate={{
            y:[0,-20,0]
          }}
          transition={{
            duration:4,
            repeat:Infinity
          }}
        >
          <Image
            src="/chess.png"
            alt="Chess King"
            dropShadow="0 0 60px #22C55E"
          />
        </MotionBox>
      </Stack>
    </Box>
  );
}