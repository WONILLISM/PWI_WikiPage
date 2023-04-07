import React, { useEffect, useState } from "react";
import { Wiki, wikiData } from "../interfaces/Data";
import Pagenation from "./Pagenation";

const WikiList = () => {
  const [wikiList, setWikiList] = useState<Wiki[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const sliceData = (data: Wiki[] | null) => {
    const offset = (page - 1) * limit;
    if (data) {
      return data.slice(offset, offset + limit);
    }
    return null;
  };

  const getData = () => {
    setLoading(true);
    setWikiList(wikiData);
    setLoading(false);
  };

  const handlePageClick = (curPage: number) => {
    setPage(curPage);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const res = sliceData(wikiData);
    if (res) {
      setWikiList(res);
    }
  }, [page]);

  if (!wikiList) {
    return <div>not data</div>;
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {wikiList.map((wiki) => (
            <div>{wiki.title}</div>
          ))}
          <Pagenation
            limit={limit}
            page={page}
            total={wikiData.length}
            onClickPage={handlePageClick}
          />
        </div>
      )}
    </div>
  );
};

export default WikiList;
