import React from "react";
import { Wiki } from "../../interfaces/Data";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RootStyle = styled.div`
  cursor: pointer;
  padding: 16px 20px;

  border-bottom: 1px solid #a5d1e1;
  color: #0d5c75;

  &:hover {
    background-color: #a5d1e1;
    color: #f9f9f9;
  }
`;

interface Props {
  item: Wiki;
}

const WikiRow = ({ item }: Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/wiki/${item.id}`);
  };

  return <RootStyle onClick={onClick}>{item.title}</RootStyle>;
};

export default WikiRow;
