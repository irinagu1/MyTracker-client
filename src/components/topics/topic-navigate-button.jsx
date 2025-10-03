import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function GoToItemButton({ topic }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const data = { topicId: topic.id };
    navigate("/item", { state: data });
  };
  return <Button onClick={handleClick}>See items</Button>;
}
