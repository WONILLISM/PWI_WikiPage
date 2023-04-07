import React, { useEffect, useState } from "react";
import { Wiki, wikiData } from "../interfaces/Data";

const WikiList = () => {
  const [wikiList, setWikiList] = useState<Wiki[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const getData = () => {
    setLoading(true);

    if (wikiData) {
      setWikiList(wikiData);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {wikiList?.map((wiki) => (
            <div>{wiki.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WikiList;
