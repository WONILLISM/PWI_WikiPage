import React from "react";

interface Props {
  limit: number;
  page: number;
  total: number;
  onClickPage: (curPage: number) => void;
}

const Pagenation = ({ limit, page, total, onClickPage }: Props) => {
  const pageNums = Math.ceil(total / limit);

  console.log(total);
  return (
    <div>
      {[...new Array(pageNums)].map((num, idx) => (
        <button onClick={() => onClickPage(idx + 1)}>{idx + 1}</button>
      ))}
    </div>
  );
};

export default Pagenation;
