import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import WikiDetail from "../components/wiki/WikiDetail";
import useWikiList from "../components/hooks/useWikiList";

const Wiki = () => {
  const { wikiList, loading, pending, fetchWikiList, createWiki } =
    useWikiList();
  const { id } = useParams();

  useEffect(() => {
    fetchWikiList();
  }, []);

  if (!id) {
    return <div>Not Found Page</div>;
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : !wikiList ? (
        <div>no data</div>
      ) : (
        <WikiDetail id={id} wikiList={wikiList} />
      )}
    </>
  );
};

export default Wiki;
