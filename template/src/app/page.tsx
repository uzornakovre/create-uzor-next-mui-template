import * as SX from "./_page.sx";
import Image from "next/image";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={SX.CONTAINER}>
      <Box component="main">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Box>
    </Box>
  );
};

export default Home;
