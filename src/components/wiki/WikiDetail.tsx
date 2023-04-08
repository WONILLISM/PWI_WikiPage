import React, { useEffect, useState } from "react";
import { Wiki } from "../../interfaces/Data";
import { getWiki } from "../../api/wiki";

interface Props {
  id: string;
}
const WikiDetail = ({ id }: Props) => {
  const [wiki, setWiki] = useState<Wiki | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWiki = async () => {
    setLoading(true);

    const wikiDetail = await getWiki(id);
    if (wikiDetail) {
      setWiki(wikiDetail);
      setLoading(false);
    }
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
          <div>{wiki.title}</div>
          <div>{wiki.content}</div>
        </div>
      )}
    </>
  );
};

export default WikiDetail;
