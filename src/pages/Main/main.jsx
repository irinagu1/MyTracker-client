import { Box, Button, Stack, Typography } from "@mui/material";
import {
  greyBlockStyle,
  whiteBlockStyle,
} from "../../styles/main-page-elements-styles";

function Main() {
  return (
    <>
      <Stack  sx={greyBlockStyle}>
        <Typography variant="h3">The Simplest Habit Tracker App on this Planet</Typography>
        <Typography>
          Finally, a daily habit tracker that helps you do more, by doing less.
        </Typography>
         <Typography>&#128158; Improves your life.</Typography>
        <Typography>100% free forever</Typography>
      </Stack>
      <Box sx={whiteBlockStyle}>Woth puctire</Box>
      <Box sx={greyBlockStyle}>With text</Box>
    </>
  );
}
export default Main;
