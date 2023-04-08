import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wiki } from "../../interfaces/Data";

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

  width: 600px;
  height: 200px;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
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
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>추가</button>
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
              <CloseButton onClick={handleClose}>x</CloseButton>
              <input type="text" onChange={handleTitleChange} />
              <input type="text" onChange={handleContentChange} />
              <button
                onClick={() => {
                  handleAddButtonClick({ title, content });
                }}
              >
                추가
              </button>
            </ModalStyle>
          </RootStyle>
        </>
      )}
    </>
  );
};

export default AddWikiModal;
