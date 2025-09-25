import { Button, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import AppTheme from "../../components/general-components/app-theme";
import TopicBox from "../../components/topics/topic-box";
import TopicHeader from "../../components/topics/topic-header";
import { useEffect } from "react";
import {
  fetchActiveTopics,
  fetchUnactiveTopics,
} from "../../features/topics/fetch-topics";
import { useDispatch, useSelector } from "react-redux";
import CustomSnackbar from "../../components/general-components/custom-snackbar";

export default function Topics(props) {
  const dispatch = useDispatch();
  const activeTopics = useSelector((state) => state.topics.activeTopics);
  const unactiveTopics = useSelector((state) => state.topics.unactiveTopics);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    const fetchInfo = async () => {
      const activeTopicsFromDb = await fetchActiveTopics();
      dispatch({ type: "DownloadActive", payload: activeTopicsFromDb.json });

      const unactiveTopicsFromDB = await fetchUnactiveTopics();
      dispatch({
        type: "DownloadUnactive",
        payload: unactiveTopicsFromDB.json,
      });
    };
    fetchInfo();
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "AlertClose" });
  };

  return (
    <>
      <Stack sx={{ flex: 1, my: 2 }} spacing={2}>
        <TopicHeader />
        <TopicBox topics={activeTopics} name="Active" />
        <TopicBox topics={unactiveTopics} name="Unactive" />
        <CustomSnackbar
          open={alert.open}
          onClose={handleCloseSnackbar}
          severity={alert.severity}
          message={alert.message}
        />
      </Stack>
    </>
  );
}
