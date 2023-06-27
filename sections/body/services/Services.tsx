import { Box, Grid } from "@mui/material";
import Image from "next/image";
import ServicesTitle from "@/assets/services/ServicesTitle.png";
import {
  MUIFONT16,
  MUIFONT20,
  MUIFONT28,
  MUIFONTWEIGHT600,
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
} from "@/contants/variables";
import { SERVICESDATA } from "./ServicesData";

const Services = () => {
  return (
    <Box id="services" mt={5}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box width={{ xs: "90%", md: "50%" }}>
          <Image
            src={ServicesTitle}
            alt={"Ahmer's Dev | Services"}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            placeholder="empty"
          />
        </Box>
      </Box>
      <Grid
        container
        columnSpacing={10}
        rowSpacing={5}
        mt={1}
        textAlign={"center"}
      >
        {SERVICESDATA?.map((item: any) => (
          <Grid item xs={12} md={4} key={item?.id}>
            <Image
              src={item?.src}
              alt={item?.alt}
              width={70}
              height={70}
              placeholder="empty"
            />
            <Box
              fontWeight={MUIFONTWEIGHT600}
              fontSize={{ xs: MUIFONT20, md: MUIFONT28 }}
              lineHeight={"42px"}
              color={MUIPRIMARYCOLOR}
              whiteSpace={"nowrap"}
              mt={2}
            >
              {item?.title}
            </Box>
            <Box
              fontSize={MUIFONT16}
              lineHeight={"28px"}
              color={MUISECONDARYCOLOR}
              mt={2}
            >
              {item?.description}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
