import { useEffect, useState } from "react";

import { Wiki } from "../interfaces/Data";
import { getAllWiki, postWiki } from "../api/wiki";
import WikiList from "../components/main/WikiList";
import WikiListToolbar from "../components/main/WikiListToolbar";
import useWikiList from "../components/hooks/useWikiList";

const Main = () => {
  const { wikiList, loading, pending, fetchWikiList, createWiki } =
    useWikiList();

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
