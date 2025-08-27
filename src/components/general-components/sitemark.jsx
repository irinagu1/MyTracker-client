import { Stack, Typography } from "@mui/material";
import consistencyImage from "./consistency.png";
export default function SitemarkIcon() {
  return (
    <Stack direction="row">
      <img src={consistencyImage} width="50px"   />
      <Typography
        component="h3"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        MyTracker App
      </Typography>
    </Stack>
  );
}
