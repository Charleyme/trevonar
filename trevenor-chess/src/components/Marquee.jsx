import { Box } from "@chakra-ui/react";
import "./marquee.css";

export default function Marquee() {
  return (
    <Box bg="green.500" overflow="hidden" py={3}>
      <div className="marquee">
        <span>
          TREVONAR CHESS • LAUNCHING SOON • STAY TUNED • JOIN OUR COMMUNITY •
          TREVONAR CHESS • LAUNCHING SOON • STAY TUNED • JOIN OUR COMMUNITY •
        </span>
      </div>
    </Box>
  );
}