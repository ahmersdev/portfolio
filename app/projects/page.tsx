"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AllProjects = () => {
  return (
    <Box paddingX={"4%"}>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        showSystemCursor={true}
        trailingSpeed={5}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      All Projects
    </Box>
  );
};

export default AllProjects;
