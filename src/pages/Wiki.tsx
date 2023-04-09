import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import WikiDetail from "../components/wiki/WikiDetail";
import useWikiList from "../hooks/useWikiList";
import Page from "../components/Page";

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
    <Page>
      {loading ? (
        <div>Loading...</div>
      ) : !wikiList ? (
        <div>no data</div>
      ) : (
        <WikiDetail id={id} wikiList={wikiList} />
      )}
    </Page>
  );
};

export default Wiki;
