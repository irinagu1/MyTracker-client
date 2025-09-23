import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import TopicItem from "./topic-item";
import { useSelector } from "react-redux";
const activeTopics = ["Sport", "Job", "Studying", "Health"];
export default function TopicBox(props) {
  //const activeTopics = useSelector((state) => state.topics.activeTopics);
  //const unactiveTopics = useSelector((state) => state.topic.unactiveTopics);
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
            <TopicItem key={topic.id} topic={topic} />
          ))}
        </List>
      </Box>
    </Grid>
  );
}
