import {
  MUIBORDERRADIUS80,
  MUIBOXSHADOWPRIMARY,
  MUIFONTWEIGHT500,
  MUIPRIMARYCOLOR,
  MUISECONDARYCOLOR,
  MUITERTIARYCOLOR,
} from "@/contants/variables";
import Button from "@mui/material/Button";

interface IGLOBALBUTTONPROPS {
  text?: string;
  type?: string | any;
  disabled?: boolean;
}

const GlobalButton = ({ text, type, disabled }: IGLOBALBUTTONPROPS) => {
  return (
    <Button
      sx={{
        color: MUISECONDARYCOLOR,
        backgroundColor: MUIPRIMARYCOLOR,
        borderRadius: MUIBORDERRADIUS80,
        boxShadow: MUIBOXSHADOWPRIMARY,
        fontWeight: MUIFONTWEIGHT500,
        letterSpacing: "0.05rem",
        whiteSpace: "nowrap",
        textTransform: "unset",
        px: "1.5rem",
        "&:hover": {
          color: `${MUITERTIARYCOLOR}`,
          backgroundColor: "#512bed !important",
        },
      }}
      type={type}
      size={"large"}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default GlobalButton;
