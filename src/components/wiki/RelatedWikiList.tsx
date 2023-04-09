import { useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import WikiRow from "../main/WikiRow";

interface Props {
  wiki: Wiki;
  wikiList: Wiki[];
}

const RelatedWikiList = ({ wiki, wikiList }: Props) => {
  const [relatedWikiList, setRelatedWikiList] = useState<Wiki[]>([]);
  const findWikiList = () => {
    const list = wikiList.filter(({ id }) => id !== wiki.id);

    setRelatedWikiList(list);
  };

  useEffect(() => {
    findWikiList();
  }, [wikiList]);

  return (
    <div>
      {relatedWikiList.map((wiki, idx) => (
        <WikiRow item={wiki} />
      ))}
    </div>
  );
};

export default RelatedWikiList;
