import {ListItem, ListItemText, Stack } from "@mui/material";
import DeleteTopicButton from "./topic-delete-button";
import DeactivateTopicButton from "./topic-deactivate-button";
import ActivateTopicButton from "./topic-activate-button";
import GoToItemButton from "./topic-navigate-button";

export default function TopicItem({ topic, type }) {
  return (
    <>
      <ListItem key={topic.id} sx={{ py: 1, px: 0, border: 1 }}>
        <Stack direction="row">
          <ListItemText
            sx={{ mr: 2 }}
            primary={topic.name}
            secondary={topic.name}
          />
          {type == "Active" ? (
            <>
              <GoToItemButton topic={topic} />
              <DeactivateTopicButton topic={topic} />
            </>
          ) : (
            <>
              <ActivateTopicButton topic={topic} />
              <DeleteTopicButton topic={topic} />
            </>
          )}
        </Stack>
      </ListItem>
    </>
  );
}
