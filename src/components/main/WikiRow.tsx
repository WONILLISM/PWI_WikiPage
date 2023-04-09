import React from "react";
import { Wiki } from "../../interfaces/Data";
import { useNavigate } from "react-router-dom";

interface Props {
  wikiList: Wiki[];
  item: Wiki;
}

const WikiRow = ({ wikiList, item }: Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/wiki/${item.id}`, { state: { wikiList: wikiList } });
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      {item.title}
    </div>
  );
};

export default WikiRow;
