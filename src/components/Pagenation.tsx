import React from "react";

interface Props {
  limit: number;
  page: number;
  total: number;
  onClickPage: (p: string) => void;
}

const Pagenation = ({ limit, page, total, onClickPage }: Props) => {
  const pageNums = Math.ceil(total / limit);

  return (
    <div>
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
    </div>
  );
};

export default Pagenation;
