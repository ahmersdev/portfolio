"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import LinkedinIcon from "@/assets/footer/linkedin.svg";
import TwitterIcon from "@/assets/footer/twitter.svg";
import {
  MUIFONT10,
  MUIFONTWEIGHT500,
  MUIPRIMARYCOLOR,
} from "@/contants/variables";
import Contact from "./contact/Contact";

const Footer = () => {
  return (
    <Box>
      <Contact />
      <Grid container alignItems={"end"}>
        <Grid
          item
          xs={3}
          sm={4}
          md={5}
          borderRadius={"0px 100px 0px 0px"}
          bgcolor={MUIPRIMARYCOLOR}
          height={40}
        />
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          textAlign={"center"}
          fontWeight={MUIFONTWEIGHT500}
          fontSize={MUIFONT10}
        >
          <Box
            display={"flex"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
            paddingBottom={2}
          >
            <Image
              src={TwitterIcon}
              alt="Twitter ahmersdev"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("https://twitter.com/ahmersdev", "_blank");
              }}
              placeholder="empty"
            />
            <Image
              src={LinkedinIcon}
              alt="Linkedin ahmersdev"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("https://www.linkedin.com/in/ahmersdev/", "_blank");
              }}
              placeholder="empty"
            />
          </Box>
          © 2023 All Rights Reserved
        </Grid>
        <Grid
          item
          xs={3}
          sm={4}
          md={5}
          bgcolor={MUIPRIMARYCOLOR}
          borderRadius={"100px 0px 0px 0px"}
          height={40}
        />
      </Grid>
    </Box>
  );
};

export default Footer;
