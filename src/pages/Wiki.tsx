import React from "react";
import { useParams } from "react-router-dom";
import WikiDetail from "../components/wiki/WikiDetail";

const Wiki = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Not Found Page</div>;
  }
  return <WikiDetail id={id} />;
};

export default Wiki;
