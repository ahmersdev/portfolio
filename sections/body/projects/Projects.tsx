import { Box, Grid } from "@mui/material";
import Image from "next/image";
import ProjectsTitle from "@/assets/projects/ProjectsTitle.png";
import ProjectActive from "@/assets/projects/ProjectsActive.svg";
import Link from "next/link";
import { PROJECTSTAB, PROJECTSDETAILS } from "./ProjectsData";
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
  const [details, setDetails] = useState<number>(1);

  return (
    <Box id="projects" mt={10}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box width={{ xs: "90%", md: "50%" }}>
          <Image
            src={ProjectsTitle}
            alt={"Ahmer's Dev | Contact"}
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
            {PROJECTSTAB?.map((item) => (
              <Grid
                item
                key={item?.filterId}
                minWidth={"100px"}
                textAlign={"center"}
                margin={"auto"}
              >
                <Image
                  src={item?.src}
                  alt={item?.alt}
                  onClick={() => setDetails(item?.filterId)}
                  style={{
                    cursor: "pointer",
                    border: `${
                      item?.filterId === details
                        ? `2px solid ${MUIPRIMARYCOLOR}`
                        : "none"
                    }`,
                    padding: "3px",
                    borderRadius: MUIBORDERRADIUSROUNDED,
                  }}
                  placeholder="empty"
                />
                {item?.filterId === details && (
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
            position={"relative"}
          >
            <Box width={{ xs: "90%", md: "70%" }}>
              {PROJECTSDETAILS?.map(
                (item: any) =>
                  item?.filterId === details && (
                    <Box key={item?.filterId} pt={"2rem"}>
                      <Box fontWeight={MUIFONTWEIGHT700} fontSize={MUIFONT48}>
                        {item?.title}
                      </Box>
                      <Box
                        pt={"2rem"}
                        letterSpacing={"0.05rem"}
                        lineHeight={"150%"}
                        fontSize={MUIFONT16}
                        color={MUISECONDARYCOLOR}
                      >
                        <Box>{item?.description}</Box>
                      </Box>
                      <Box pt={"2rem"}>
                        <Link href={"portfolio"}>
                          <GlobalButton text="View Demo" />
                        </Link>
                      </Box>
                    </Box>
                  )
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            alignItems={"center"}
            pl={{ xs: "10%", md: "unset" }}
            position={"relative"}
          >
            {PROJECTSDETAILS?.map(
              (item: any) =>
                item?.filterId === details && (
                  <Image
                    src={item?.img}
                    alt={item?.title}
                    key={item?.filterId}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "90%", height: "auto" }}
                    placeholder="empty"
                  />
                )
            )}
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
