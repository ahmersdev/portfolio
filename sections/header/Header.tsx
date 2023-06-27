"use client";

import { AppBar, Box, Drawer, Grid } from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/header/logo.svg";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {
  MUIBORDERRADIUSROUNDED,
  MUIFONT20,
  MUIFONT28,
  MUIFONTWEIGHT800,
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
  MUITERTIARYCOLOR,
} from "@/contants/variables";
import Link from "next/link";
import AppMenu from "@/ui/app-menu/AppMenu";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState({ right: false });

  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="static"
      sx={{ mt: { xs: 2, md: 0 }, paddingInline: "4%" }}
      id="home"
    >
      <Grid container alignItems={"center"}>
        <Grid item xs={6}>
          <Link
            href={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              letterSpacing: 1,
              fontWeight: MUIFONTWEIGHT800,
              fontSize: MUIFONT20,
              width: "max-content",
            }}
          >
            <Image
              src={Logo}
              width={0}
              alt="Web Application Developer"
              placeholder="empty"
            />
            <Box whiteSpace={"nowrap"} pl={2}>
              Ahmer’s Dev
              <span
                style={{
                  backgroundColor: MUIPRIMARYCOLOR,
                  borderRadius: MUIBORDERRADIUSROUNDED,
                  height: "5px",
                  width: "5px",
                  display: "inline-block",
                }}
              />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6} textAlign={"end"}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={0}
              textAlign={"end"}
              display={{ xs: "unset", md: "none" }}
            >
              <MenuOpenRoundedIcon
                sx={{
                  cursor: "pointer",
                  fontSize: MUIFONT28,
                  color: MUITERTIARYCOLOR,
                }}
                onClick={() => {
                  setOpenDrawer({ right: true });
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={0}
              md={12}
              textAlign={"end"}
              display={{ xs: "none", md: "unset" }}
            >
              <AppMenu setOpenDrawer={setOpenDrawer} />
            </Grid>
          </Grid>
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: MUIPRIMARYCOLOR,
                width: 280,
                padding: "25px",
              },
            }}
            anchor={"right"}
            open={openDrawer["right"]}
            onClose={() => {
              setOpenDrawer({ right: false });
            }}
          >
            <Box textAlign={"end"}>
              <CloseIcon
                onClick={() => setOpenDrawer({ right: false })}
                sx={{ cursor: "pointer", color: MUISECONDARYCOLOR }}
              />
            </Box>
            <AppMenu setOpenDrawer={setOpenDrawer} />
          </Drawer>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
