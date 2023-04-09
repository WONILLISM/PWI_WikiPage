import { useEffect, useState } from "react";

import { Wiki } from "../interfaces/Data";
import { getAllWiki, postWiki } from "../api/wiki";
import WikiList from "../components/main/WikiList";
import WikiListToolbar from "../components/main/WikiListToolbar";

const Main = () => {
  const [wikiList, setWikiList] = useState<Wiki[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);

  const fetchWikiList = async () => {
    setLoading(true);

    const wikiListRes = await getAllWiki();
    if (wikiListRes) {
      setWikiList(wikiListRes);
      setLoading(false);
    }
  };

  const createWiki = async (arg: Wiki) => {
    const resultCreateWiki = await postWiki(arg);

    setPending(true);
    if (resultCreateWiki === "success") {
      setPending(false);
      fetchWikiList();
    }
  };

  useEffect(() => {
    fetchWikiList();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading ... </div>
      ) : !wikiList ? (
        <></>
      ) : (
        <>
          <WikiListToolbar handleAddButtonClick={createWiki} />
          <WikiList data={wikiList} />
        </>
      )}
    </>
  );
};

export default Main;
