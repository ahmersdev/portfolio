import { Grid, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeroBannerImg from "@/assets/hero-banner/hero-banner.png";
import {
  MUIFONT16,
  MUIFONT18,
  MUIFONT36,
  MUIFONT56,
  MUIFONTWEIGHT600,
  MUIFONTWEIGHT700,
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
  MUITERTIARYCOLOR,
} from "@/contants/variables";
import Link from "next/link";
import GlobalButton from "@/ui/button/GlobalButton";

const HeroBanner = () => {
  return (
    <Grid container mt={5}>
      <Grid
        item
        xs={12}
        md={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Box
            fontWeight={MUIFONTWEIGHT600}
            fontSize={MUIFONT16}
            color={MUISECONDARYCOLOR}
          >
            Hey, I am Ahmer
          </Box>
          <Box
            fontWeight={MUIFONTWEIGHT700}
            fontSize={{ xs: MUIFONT36, md: MUIFONT56 }}
            color={MUIPRIMARYCOLOR}
            lineHeight={{ xs: "45px", md: "67px" }}
            mt={2}
          >
            <span style={{ color: MUITERTIARYCOLOR }}>Frontend</span> Web
            Developer
          </Box>
          <Box
            fontSize={{ xs: MUIFONT16, md: MUIFONT18 }}
            color={MUISECONDARYCOLOR}
          >
            With expertise in HTML5, XHTML, CSS3, and Bootstrap, I bring
            seamless visual appeal and responsive design to your website.
            Leveraging JavaScript, NextJS, ReactJS, React TSX/Typescript, and
            JSON, I create dynamic and interactive web experiences that
            captivate your audience.
          </Box>
          <Box mt={"6%"}>
            <Link href={"#contact"}>
              <GlobalButton text="Get in touch" />
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7} mt={{ xs: 4, md: 0 }}>
        <Image
          src={HeroBannerImg}
          alt={
            "Ahmer's Dev | Streamline Your Digital Experience | Web Application Developer"
          }
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          placeholder="empty"
        />
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
