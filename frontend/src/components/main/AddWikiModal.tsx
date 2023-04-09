import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wiki } from "../../interfaces/Data";
import TextField from "../TextFeild";

const AddButton = styled.button`
  color: #59a5b7;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 8px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-0.5px);
    transition: all ease-in-out 0.1s;
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const CloseButton = styled.button`
  color: #f9f9f9;
  background-color: #59a5b7;
  padding: 4px 12px;
  border-radius: 8px;

  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    background-color: #a5d1e1;
    color: #f9f9f9;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
  background-color: #59a5b7;
  border-radius: 8px;
  padding: 8px;

  &:hover {
    background-color: #a5d1e1;
    color: #f9f9f9;
  }
`;

const RootStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalStyle = styled.div`
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  display: flex;
  flex-direction: column;

  padding: 36px 20px 20px 20px;
  width: 600px;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #f9f9f9;
  border-radius: 8px;
`;

interface Props {
  handleAddButtonClick: (arg: Wiki) => void;
}

const AddWikiModal = ({ handleAddButtonClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const ref = useRef<HTMLDivElement>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleOutsideClick = () => {
    const outsideClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    const removeEvent = () => {
      document.removeEventListener("mousedown", outsideClick);
    };
    return removeEvent;
  };

  useEffect(() => {
    handleOutsideClick();
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    setOpen(false);
  };

  return (
    <>
      <AddButton onClick={handleOpen}>ADD</AddButton>
      {open && (
        <>
          <RootStyle>
            <ModalStyle
              data-bs-backdrop="static"
              ref={ref}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CloseButton onClick={handleClose}>close</CloseButton>
              <TextField
                type="text"
                value={title}
                label="제목"
                onChange={handleTitleChange}
              />
              <TextField
                type="text"
                value={content}
                label="내용"
                multiline
                onChange={handleContentChange}
              />
              <SaveButton
                onClick={() => {
                  handleClose();
                  handleAddButtonClick({ title, content });
                }}
              >
                Save
              </SaveButton>
            </ModalStyle>
          </RootStyle>
        </>
      )}
    </>
  );
};

export default AddWikiModal;
