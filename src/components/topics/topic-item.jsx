import { Button, ListItem, ListItemText, Stack } from "@mui/material";
import { useState } from "react";

export default function TopicItem(props) {
  return (
    <>
      <ListItem key={props.topic.id} sx={{ py: 1, px: 0, border:1 }}>
        <Stack direction="row">
          <ListItemText
            sx={{ mr: 2 }}
            primary={props.topic.name}
            secondary={props.topic.name}
          />
          <Button>Deactivate</Button>
          <Button>Delete</Button>
        </Stack>
      </ListItem>
    </>
  );
}
