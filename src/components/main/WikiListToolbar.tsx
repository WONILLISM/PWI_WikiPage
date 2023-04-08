import React from "react";
import { Wiki } from "../../interfaces/Data";
import AddWikiModal from "./AddWikiModal";

interface Props {
  handleAddButtonClick: (arg: Wiki) => void;
}
const WikiListToolbar = ({ handleAddButtonClick }: Props) => {
  return (
    <div>
      <AddWikiModal handleAddButtonClick={handleAddButtonClick} />
    </div>
  );
};

export default WikiListToolbar;
