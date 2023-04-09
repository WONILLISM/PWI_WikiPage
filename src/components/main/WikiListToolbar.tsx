import React from "react";
import { Wiki } from "../../interfaces/Data";
import AddWikiModal from "./AddWikiModal";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  color: #f9f9f9;
  font-weight: 700;
  letter-spacing: 0.2rem;
`;

const RootStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;

  background-color: #199fb1;
  border-radius: 16px 16px 0px 0px;
`;

interface Props {
  handleAddButtonClick: (arg: Wiki) => void;
}

const WikiListToolbar = ({ handleAddButtonClick }: Props) => {
  return (
    <RootStyle>
      <Title>WIKI LIST</Title>
      <AddWikiModal handleAddButtonClick={handleAddButtonClick} />
    </RootStyle>
  );
};

export default WikiListToolbar;
