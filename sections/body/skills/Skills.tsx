import { Grid, Box } from "@mui/material";
import SkillsCover from "@/assets/skills/skillsCover.png";
import Bullet from "@/assets/skills/bullet.svg";
import Image from "next/image";
import {
  MUIFONT18,
  MUIFONT48,
  MUIFONTWEIGHT700,
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
} from "@/contants/variables";
import { SKILLSDATA } from "./SkillsData";

const Skills = () => {
  return (
    <Grid container mt={10}>
      <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
        <Box>
          <Box
            fontWeight={MUIFONTWEIGHT700}
            fontSize={MUIFONT48}
            lineHeight={"60px"}
            color={MUISECONDARYCOLOR}
          >
            What About
            <Box color={MUIPRIMARYCOLOR}>My Skills</Box>
          </Box>
          <Box
            fontSize={MUIFONT18}
            lineHeight={"34px"}
            color={MUISECONDARYCOLOR}
          >
            Here are a few technologies I’ve been working with recently:
          </Box>
          <Grid container mt={1} spacing={1}>
            {SKILLSDATA?.map((item: any) => (
              <Grid
                item
                key={item?.id}
                xs={12}
                md={6}
                display={"flex"}
                alignItems={"center"}
                gap={1}
              >
                <Image
                  src={Bullet}
                  alt="ahmersdev"
                  width={0}
                  height={0}
                  placeholder="empty"
                />
                <Box
                  fontSize={MUIFONT18}
                  color={MUISECONDARYCOLOR}
                  sx={{ opacity: "0.6" }}
                >
                  {item?.title}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        mt={{ xs: 5, md: 0 }}
      >
        <Image
          src={SkillsCover}
          alt="ahmersdev | Skills"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          placeholder="empty"
        />
      </Grid>
    </Grid>
  );
};

export default Skills;
