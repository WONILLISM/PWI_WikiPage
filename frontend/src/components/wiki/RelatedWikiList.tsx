import { useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import WikiRow from "../main/WikiRow";
import styled from "styled-components";

const TitleArea = styled.div`
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #199fb1;
`;

interface Props {
  wiki: Wiki;
  wikiList: Wiki[];
}

const RelatedWikiList = ({ wiki, wikiList }: Props) => {
  const [relatedWikiList, setRelatedWikiList] = useState<Wiki[]>([]);

  const findWikiList = () => {
    const list = wikiList.filter(({ id }) => id !== wiki.id);
    const curId = wiki.id;

    if (curId !== undefined) {
      let values = wikiList
        .filter(({ id }) => id !== wiki.id)
        .map((v) => Object.values(v));
      let curTitle = wiki.title;
      let arr: Wiki[] = [];
      for (let i = 0; i < values.length; i++) {
        const id = values[i][2];
        const title = values[i][0];

        if (title.includes(curTitle)) {
          arr.push({ id: id, title: title, content: values[i][1] });
        }
      }

      setRelatedWikiList(arr);
    }
  };

  useEffect(() => {
    findWikiList();
  }, [wikiList]);

  console.log(relatedWikiList);
  return (
    <div>
      <TitleArea>관련된 위키</TitleArea>
      {relatedWikiList.map((wiki, idx) => (
        <WikiRow item={wiki} />
      ))}
    </div>
  );
};

export default RelatedWikiList;
