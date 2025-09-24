import {
  Box,
  Grid,
  List,
  Typography,
} from "@mui/material";
import TopicItem from "./topic-item";

export default function TopicBox(props) {
  return (
    <Grid
      size={{ xs: 12, sm: 5, lg: 4 }}
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        backgroundColor: "background.paper",
        borderRight: { sm: "none", md: "1px solid" },
        borderColor: { sm: "none", md: "divider" },
        alignItems: "start",
        pt: 2,
        px: 10,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography>{props.name}</Typography>
        <List disablePadding>
          {props.topics.map((topic) => (
            <TopicItem topic={topic} type={props.name} />
          ))}
        </List>
      </Box>
    </Grid>
  );
}
