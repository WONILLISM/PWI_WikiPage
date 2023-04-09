import React from "react";
import styled from "styled-components";

const RootStyle = styled.div`
  display: flex;
  justify-content: center;

  padding: 16px;
  border-radius: 0 0 16px 16px;
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
      <button disabled={page <= 1} onClick={() => onClickPage("prev")}>
        prev
      </button>
      {[...Array(pageNums)].map((_, idx) => (
        <button key={idx} onClick={() => onClickPage(String(idx))}>
          {idx + 1}
        </button>
      ))}
      <button disabled={page >= pageNums} onClick={() => onClickPage("next")}>
        next
      </button>
    </RootStyle>
  );
};

export default Pagenation;
