import { useEffect, useState } from "react";
import { Wiki } from "../interfaces/Data";
import Pagenation from "./Pagenation";

interface Props {
  data: Wiki[];
}
const WikiList = ({ data }: Props) => {
  const [list, setList] = useState<Wiki[]>();
  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const sliceData = () => {
    const offset = (page - 1) * limit;
    const result = data.slice(offset, offset + limit);
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
    <>
      {list && (
        <>
          {list.map((item, idx) => (
            <div>{item.title}</div>
          ))}
          <Pagenation
            limit={limit}
            page={page}
            total={data.length}
            onClickPage={handlePageClick}
          />
        </>
      )}
    </>
  );
};

export default WikiList;
