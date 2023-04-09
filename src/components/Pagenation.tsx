import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 4px;

  &:disabled {
    pointer-events: none;
    color: #a9a9a9;
  }

  &:hover {
    border-bottom: 1px solid #a5d1e1;
  }
`;

const NumberButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 28px;
  height: 28px;

  border: 1px solid #a5d1e1;
  border-radius: 50%;

  &:hover {
    background-color: #a5d1e1;
    color: #f9f9f9;
  }
`;

const RootStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  border-radius: 0 0 16px 16px;

  color: #59a5b7;
`;

interface Props {
  limit: number;
  page: number;
  total: number;
  onClickPage: (p: string) => void;
}

const Pagenation = ({ limit, page, total, onClickPage }: Props) => {
  const pageNums = Math.ceil(total / limit);

  return (
    <RootStyle>
      <Button disabled={page <= 1} onClick={() => onClickPage("prev")}>
        prev
      </Button>
      {[...Array(pageNums)].map((_, idx) => (
        <NumberButton key={idx} onClick={() => onClickPage(String(idx))}>
          {idx + 1}
        </NumberButton>
      ))}
      <Button disabled={page >= pageNums} onClick={() => onClickPage("next")}>
        next
      </Button>
    </RootStyle>
  );
};

export default Pagenation;
