import { Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TableItems from "../../components/items/table-items";
import { useDispatch, useSelector } from "react-redux";
import { fetchActiveItems } from "../../features/items/fetch-items";
import { DownloadActiveItems } from "../../redux-store/reducers/item-reducer";
import RangeDateItems from "../../components/items/range-date-items";
import CustomSnackbar from "../../components/general-components/custom-snackbar";

export default function ActiveItem() {
  const alert = useSelector((state) => state.alert);

  const location = useLocation();
  const topicId = location.state.topicId;

  const dispatch = useDispatch();

  const fetchInfo = async () => {
    const activeItemsFromDB = await fetchActiveItems(topicId);
    console.log(activeItemsFromDB);
    dispatch({ type: DownloadActiveItems, payload: activeItemsFromDB.json });
  };

  useEffect(() => {
    console.log(topicId);
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
      <RangeDateItems />
      <TableItems />
      <CustomSnackbar
        open={alert.open}
        onClose={handleCloseSnackbar}
        severity={alert.severity}
        message={alert.message}
      />
    </>
  );
}
