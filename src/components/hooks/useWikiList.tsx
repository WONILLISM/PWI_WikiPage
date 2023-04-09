import React, { useState } from "react";
import { Wiki } from "../../interfaces/Data";
import { getAllWiki, postWiki } from "../../api/wiki";

const useWikiList = () => {
  const [wikiList, setWikiList] = useState<Wiki[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);

  const fetchWikiList = async () => {
    setLoading(true);

    const wikiListRes = await getAllWiki();
    if (wikiListRes) {
      setWikiList(wikiListRes);
      setLoading(false);
    }
  };

  const createWiki = async (arg: Wiki) => {
    const resultCreateWiki = await postWiki(arg);

    setPending(true);
    if (resultCreateWiki === "success") {
      setPending(false);
      fetchWikiList();
    }
  };

  return {
    wikiList,
    loading,
    pending,
    fetchWikiList,
    createWiki,
  };
};

export default useWikiList;
