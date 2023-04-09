import React, { useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import { useLocation } from "react-router-dom";

interface Props {
  wiki: Wiki;
}

const WikiContent = ({ wiki }: Props) => {
  const location = useLocation();
  const { wikiList } = location.state as { wikiList: Wiki[] };
  const [content, setContent] = useState<string>("");

  const replaceContent = () => {
    const curId = wiki.id;

    if (curId !== undefined) {
      let values = wikiList.map((v) => Object.values(v));
      let curContent = values[curId][1];

      for (let i = 0; i < values.length; i++) {
        const id = values[curId][2];
        const title = values[i][0];
        const reg = new RegExp(`${title}`, "g");
        curContent = curContent.replace(
          reg,
          `<a href="/wiki/${id}">${title}</a>`
        );
        console.log(title);
      }
      setContent(curContent);
    }
  };

  useEffect(() => {
    replaceContent();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default WikiContent;
