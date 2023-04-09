import React from "react";
import { useLocation } from "react-router-dom";
import { Wiki } from "../../interfaces/Data";

interface Props {
  wiki: Wiki;
}

const RelatedWikiList = ({ wiki }: Props) => {
  const { wikiList } = useLocation().state as { wikiList: Wiki[] };

  const findWikiList = () => {
    const list = wikiList.filter(({ id }) => id !== wiki.id);
    console.log(list);
  };

  findWikiList();

  return <div>RelatedWikiList</div>;
};

export default RelatedWikiList;
