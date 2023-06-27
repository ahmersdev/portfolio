"use client";

import { Box, Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect } from "react";
import HeroBanner from "@/sections/body/hero-banner/HeroBanner";
import Services from "@/sections/body/services/Services";
import Skills from "@/sections/body/skills/Skills";
import Projects from "@/sections/body/projects/Projects";
import {
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
  MUITERTIARYCOLOR,
} from "@/contants/variables";
import dynamic from "next/dynamic";

const AnimatedCursor: any = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

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
      <Fab
        size="small"
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          backgroundColor: MUIPRIMARYCOLOR,
          "&:hover": {
            background: MUITERTIARYCOLOR,
          },
        }}
        onClick={() => {
          window.open("http://wa.me/+923154806474", "_blank");
        }}
      >
        <WhatsAppIcon sx={{ color: MUISECONDARYCOLOR }} />
      </Fab>
      <HeroBanner />
      <Services />
      <Skills />
      <Projects />
    </Box>
  );
}
