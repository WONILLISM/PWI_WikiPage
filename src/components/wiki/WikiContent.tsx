import React, { useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import styled from "styled-components";

const RootStyle = styled.div``;

interface Props {
  wiki: Wiki;
  wikiList: Wiki[];
}

const WikiContent = ({ wiki, wikiList }: Props) => {
  const [content, setContent] = useState<string>("");

  const replaceContent = () => {
    const curId = wiki.id;

    if (curId !== undefined) {
      let values = wikiList
        .filter(({ id }) => id !== wiki.id)
        .map((v) => Object.values(v));
      let curContent = wiki.content;

      for (let i = 0; i < values.length; i++) {
        const id = values[i][2];
        const title = values[i][0];
        const reg = new RegExp(`${title}`, "g");
        curContent = curContent.replace(
          reg,
          `<a href="/wiki/${id}">${title}</a>`
        );
      }
      setContent(curContent);
    }
  };

  useEffect(() => {
    replaceContent();
  }, []);

  return (
    <RootStyle>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </RootStyle>
  );
};

export default WikiContent;
