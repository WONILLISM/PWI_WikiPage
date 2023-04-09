import { useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import Pagenation from "../Pagenation";
import WikiRow from "./WikiRow";
import styled from "styled-components";

const Items = styled.div``;

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  data: Wiki[];
}

const WikiList = ({ data }: Props) => {
  const [list, setList] = useState<Wiki[]>();
  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const sliceData = () => {
    const reverseList = [...data].reverse();
    const offset = (page - 1) * limit;
    const result = reverseList.slice(offset, offset + limit);
    setList(result);
  };

  const handlePageClick = (p: string) => {
    if (p === "prev") {
      setPage(page - 1);
    } else if (p === "next") {
      setPage(page + 1);
    } else {
      setPage(Number(p) + 1);
    }
  };

  useEffect(() => {
    sliceData();
  }, [page]);

  return (
    <RootStyle>
      <Items>{list && list.map((item, idx) => <WikiRow item={item} />)}</Items>
      <Pagenation
        limit={limit}
        page={page}
        total={data.length}
        onClickPage={handlePageClick}
      />
    </RootStyle>
  );
};

export default WikiList;
