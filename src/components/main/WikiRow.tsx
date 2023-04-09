import React from "react";
import { Wiki } from "../../interfaces/Data";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Wiki;
}

const WikiRow = ({ item }: Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/wiki/${item.id}`);
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      {item.title}
    </div>
  );
};

export default WikiRow;
