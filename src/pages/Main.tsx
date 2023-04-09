import { useEffect } from "react";

import WikiList from "../components/main/WikiList";
import WikiListToolbar from "../components/main/WikiListToolbar";
import useWikiList from "../hooks/useWikiList";
import Page from "../components/Page";
import styled from "styled-components";

const WikiListWrapper = styled.div`
  margin-top: 16px;
  min-width: 360px;
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border-radius: 16px;
`;

const Main = () => {
  const { wikiList, loading, pending, fetchWikiList, createWiki } =
    useWikiList();

  useEffect(() => {
    fetchWikiList();
  }, []);

  return (
    <Page>
      <WikiListWrapper>
        <WikiListToolbar handleAddButtonClick={createWiki} />
        {loading ? (
          <div>Loading ... </div>
        ) : !wikiList ? (
          <></>
        ) : (
          <WikiList data={wikiList} />
        )}
      </WikiListWrapper>
    </Page>
  );
};

export default Main;
