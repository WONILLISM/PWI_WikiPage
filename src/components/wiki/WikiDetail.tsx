import React, { ChangeEvent, useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import { getWiki, putWiki } from "../../api/wiki";
import WikiContent from "./WikiContent";
import RelatedWikiList from "./RelatedWikiList";
import styled from "styled-components";
import TextField from "../TextFeild";
import { useNavigate } from "react-router-dom";

const BackButton = styled.button`
  margin-top: 20px;
  padding: 4px 16px;
  color: #f9f9f9;

  font-weight: 700;
`;

const WikiHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 16px; */
`;

const WikiTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.04rem;
`;
const WikiStyle = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 16px;
  margin-bottom: 32px;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RootStyle = styled.div`
  width: 600px;
  min-width: 360px;
`;

interface Props {
  id: string;
  wikiList: Wiki[];
}

const WikiDetail = ({ id, wikiList }: Props) => {
  const navigate = useNavigate();
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
  }, [id]);

  if (!wiki) return <></>;

  const isUpdateComponent = () => {
    if (update) {
      return (
        <>
          <WikiHeader>
            <TextField
              type="text"
              label="제목"
              value={title}
              onChange={handleTitleChange}
            />
            <button onClick={handleSaveClick}>저장</button>
          </WikiHeader>
          <TextField
            multiline
            label="내용"
            value={content}
            onChange={handleContentChange}
          />
        </>
      );
    }
    return (
      <>
        <WikiHeader>
          <WikiTitle>{wiki.title}</WikiTitle>
          <button onClick={handleUpdateClick}>수정</button>
        </WikiHeader>
        <WikiContent wiki={wiki} wikiList={wikiList} />
      </>
    );
  };
  return (
    <RootStyle>
      <BackButton
        onClick={() => {
          navigate("/");
        }}
      >
        {"목록으로"}
      </BackButton>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <WikiStyle>
          {isUpdateComponent()}
          <RelatedWikiList wiki={wiki} wikiList={wikiList} />
        </WikiStyle>
      )}
    </RootStyle>
  );
};

export default WikiDetail;
