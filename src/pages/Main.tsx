import { useEffect, useState } from "react";

import { Wiki } from "../interfaces/Data";
import { getWiki } from "../api/wiki";
import WikiList from "../components/WikiList";

const Main = () => {
  const [wikiList, setWikiList] = useState<Wiki[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWikiList = async () => {
    setLoading(true);

    const wikiList = await getWiki();
    if (wikiList) {
      setWikiList(wikiList);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchWikiList();
    }
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading ... </div>
      ) : !wikiList ? (
        <></>
      ) : (
        <WikiList data={wikiList} />
      )}
    </>
  );
};

export default Main;
