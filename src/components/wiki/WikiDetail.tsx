import React, { ChangeEvent, useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import { getWiki, putWiki } from "../../api/wiki";
import WikiContent from "./WikiContent";
import RelatedWikiList from "./RelatedWikiList";

interface Props {
  id: string;
  wikiList: Wiki[];
}
const WikiDetail = ({ id, wikiList }: Props) => {
  const [wiki, setWiki] = useState<Wiki | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);

  const [update, setUpdate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const fetchWiki = async () => {
    setLoading(true);

    const wikiDetail = await getWiki(id);
    if (wikiDetail) {
      setWiki(wikiDetail);
      setTitle(wikiDetail.title);
      setContent(wikiDetail.content);
      setLoading(false);
    }
  };

  const updateWiki = async (newWiki: Wiki) => {
    setPending(true);

    const updateWikiRes = await putWiki(id, newWiki);
    if (updateWikiRes === "success") {
      setPending(false);
      fetchWiki();
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle(value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setContent(value);
  };

  const handleUpdateClick = () => {
    setUpdate(true);
  };

  const handleSaveClick = () => {
    updateWiki({ title, content });
    setUpdate(false);
  };

  useEffect(() => {
    fetchWiki();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : !wiki ? (
        <></>
      ) : (
        <div>
          <div>
            {update ? (
              <button onClick={handleSaveClick}>저장</button>
            ) : (
              <button onClick={handleUpdateClick}>수정</button>
            )}
          </div>
          {update ? (
            <div>
              <input
                type="text"
                defaultValue={wiki.title}
                onChange={handleTitleChange}
              />
              <textarea
                defaultValue={wiki.content}
                onChange={handleContentChange}
              />
            </div>
          ) : (
            <>
              <WikiContent wiki={wiki} wikiList={wikiList} />
              <RelatedWikiList wiki={wiki} wikiList={wikiList} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default WikiDetail;
