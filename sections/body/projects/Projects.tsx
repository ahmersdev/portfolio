import { Box, Grid } from "@mui/material";
import Image from "next/image";
import ProjectsTitle from "@/assets/projects/ProjectsTitle.png";
import ProjectActive from "@/assets/projects/ProjectsActive.svg";
import Link from "next/link";
import { PROJECTSARRAY } from "./ProjectsData";
import { useState } from "react";
import {
  MUIBORDERRADIUSROUNDED,
  MUIFONT16,
  MUIFONT48,
  MUIFONTWEIGHT700,
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
} from "@/contants/variables";
import GlobalButton from "@/ui/button/GlobalButton";

const Projects = () => {
  const [details, setDetails] = useState<any>(PROJECTSARRAY[0]);

  console.log(details);

  return (
    <Box id="projects" mt={10}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box width={{ xs: "90%", md: "50%" }}>
          <Image
            src={ProjectsTitle}
            alt={"Ahmer's Dev | Projects"}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            placeholder="empty"
          />
        </Box>
      </Box>
      <Box mt={5}>
        <Box overflow={"auto"}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            margin={"auto"}
            pt={"2rem"}
            width={"90%"}
            minWidth={"1020px"}
          >
            {PROJECTSARRAY?.map((item: any) => (
              <Grid
                item
                key={item?.id}
                minWidth={"100px"}
                textAlign={"center"}
                margin={"auto"}
              >
                <Image
                  src={item?.src}
                  alt={item?.alt}
                  onClick={() => setDetails(item)}
                  style={{
                    cursor: "pointer",
                    border: `${
                      item?.id === details?.id
                        ? `2px solid ${MUIPRIMARYCOLOR}`
                        : "none"
                    }`,
                    padding: "3px",
                    borderRadius: MUIBORDERRADIUSROUNDED,
                  }}
                  placeholder="empty"
                />
                {item?.id === details?.id && (
                  <Box textAlign={"center"}>
                    <Image src={ProjectActive} alt="" placeholder="empty" />
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid
          container
          pt={"3rem"}
          flexDirection={{ xs: "column-reverse", md: "unset" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            alignItems={"center"}
            pt={{ xs: "2rem", md: "unset" }}
          >
            <Box width={{ xs: "90%", md: "70%" }}>
              <Box pt={"2rem"}>
                <Box fontWeight={MUIFONTWEIGHT700} fontSize={MUIFONT48}>
                  {details?.title}
                </Box>
                <Box
                  pt={"2rem"}
                  letterSpacing={"0.05rem"}
                  lineHeight={"150%"}
                  fontSize={MUIFONT16}
                  color={MUISECONDARYCOLOR}
                >
                  <Box>{details?.description}</Box>
                </Box>
                <Box pt={"2rem"}>
                  <Link href={details.link}>
                    <GlobalButton text="View Demo" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            alignItems={"center"}
            pl={{ xs: "10%", md: "unset" }}
          >
            <Image
              src={details?.img}
              alt={details?.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "90%", height: "auto" }}
              placeholder="empty"
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={5} textAlign={"center"}>
        <Link href={"/projects"}>
          <GlobalButton text="View All Projects" />
        </Link>
      </Box>
    </Box>
  );
};

export default Projects;
