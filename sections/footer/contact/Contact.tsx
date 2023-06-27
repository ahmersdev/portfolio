import { Grid, Box } from "@mui/material";
import Image from "next/image";
import ContactTitle from "@/assets/contact/ContactTitle.png";
import Whatsapp from "@/assets/contact/whatsapp.svg";
import Email from "@/assets/contact/email.svg";
import {
  MUIFONT13_5,
  MUIFONT15,
  MUIFONTWEIGHT500,
  MUIFONTWEIGHT700,
  MUISECONDARYCOLOR,
} from "@/contants/variables";
import ContactForm from "@/ui/contact-form/ContactForm";

const Contact = () => {
  return (
    <Box id="contact" mt={10} paddingX={"4%"}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box width={{ xs: "90%", md: "50%" }}>
          <Image
            src={ContactTitle}
            alt={"Ahmer's Dev | Contact"}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            placeholder="empty"
          />
        </Box>
      </Box>
      <Box textAlign={"center"} mt={5} fontSize={MUIFONT13_5}>
        Let’s make something new, different, and more meaningful or make things
        more visual or conceptual.
      </Box>
      <Grid container mt={10}>
        <Grid item xs={12} md={4}>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Image
              src={Whatsapp}
              alt={"ahmersdev | WhatsApp"}
              width={0}
              height={0}
              placeholder="empty"
            />
            <Box color={MUISECONDARYCOLOR}>
              <Box fontWeight={MUIFONTWEIGHT700} fontSize={MUIFONT15}>
                WhatsApp
              </Box>
              <Box
                fontWeight={MUIFONTWEIGHT500}
                fontSize={MUIFONT13_5}
                sx={{ opacity: "0.6" }}
                mt={1.5}
              >
                +92 315 4806474
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={3} mt={5}>
            <Image
              src={Email}
              alt={"ahmersdev | Email"}
              width={0}
              height={0}
              placeholder="empty"
            />
            <Box color={MUISECONDARYCOLOR}>
              <Box fontWeight={MUIFONTWEIGHT700} fontSize={MUIFONT15}>
                Email
              </Box>
              <Box
                fontWeight={MUIFONTWEIGHT500}
                fontSize={MUIFONT13_5}
                sx={{ opacity: "0.6" }}
                mt={1.5}
              >
                mahmerakram6@gmail.com
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} mt={{ xs: 5, md: 0 }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
