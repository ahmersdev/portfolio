import { useState, Fragment } from "react";
import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { APPMENUITEMS } from "./AppMenuData";
import Link from "next/link";
import {
  MUIFONTWEIGHT500,
  MUISECONDARYCOLOR,
  MUITERTIARYCOLOR,
} from "@/contants/variables";
import GlobalButton from "../button/GlobalButton";

const AppMenu = ({ setOpenDrawer }: any) => {
  const [url, setUrl] = useState("home");

  return (
    <Fragment>
      <List
        sx={{
          display: { xs: "box", md: "flex" },
          justifyContent: { xs: "unset", md: "end" },
          alignItems: "center",
        }}
      >
        {APPMENUITEMS?.map((item) => (
          <ListItem key={item?.id} sx={{ width: "unset" }}>
            <ListItemButton
              selected={item?.link === url}
              sx={{
                padding: "0px",
                margin: "16px",
                color: MUISECONDARYCOLOR,
                fontWeight: MUIFONTWEIGHT500,
                "&:hover": {
                  color: `${MUITERTIARYCOLOR} !important`,
                },
                "&.Mui-selected": {
                  color: `${MUITERTIARYCOLOR} !important`,
                  background: "transparent",
                  fontWeight: `600 !important`,
                  "&:hover": {
                    background: "transparent",
                  },
                },
              }}
            >
              <Link
                href={item?.link}
                onClick={() => {
                  setOpenDrawer && setOpenDrawer({ right: false });
                  setUrl(item?.link);
                }}
              >
                {item?.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Box display={{ xs: "unset", md: "none" }}>
          <ListItem sx={{ width: "unset" }}>
            <ListItemButton
              selected={"#contact" === url}
              sx={{
                padding: "0px",
                margin: "16px",
                color: MUISECONDARYCOLOR,
                fontWeight: MUIFONTWEIGHT500,
                "&:hover": {
                  color: `${MUITERTIARYCOLOR} !important`,
                },
                "&.Mui-selected": {
                  color: `${MUITERTIARYCOLOR} !important`,
                  background: "transparent",
                  fontWeight: `600 !important`,
                  "&:hover": {
                    background: "transparent",
                  },
                },
              }}
            >
              <Link
                href={"#contact"}
                onClick={() => {
                  setOpenDrawer && setOpenDrawer({ right: false });
                  setUrl("#contact");
                }}
              >
                Get in touch
              </Link>
            </ListItemButton>
          </ListItem>
        </Box>
        <Box display={{ xs: "none", md: "unset" }} marginLeft={"16px"}>
          <Link
            href={"#contact"}
            onClick={() => {
              setUrl("#contact");
            }}
          >
            <GlobalButton text="Get in touch" />
          </Link>
        </Box>
      </List>
    </Fragment>
  );
};

export default AppMenu;
