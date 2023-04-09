import React from "react";
import styled from "styled-components";

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  children: React.ReactNode;
}
const Page = ({ children }: Props) => {
  return <RootStyle>{children}</RootStyle>;
};

export default Page;
