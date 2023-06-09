import { Wiki } from "../interfaces/Data";

export const getWiki = async (id: string): Promise<Wiki | null> => {
  const res = await fetch(`http://localhost:4000/wiki/${id}`, {
    method: "GET",
  });

  if (res.ok) return res.json();
  return null;
};

export const getAllWiki = async (): Promise<Wiki[] | null> => {
  const res = await fetch("http://localhost:4000/wiki", {
    method: "GET",
  });

  if (res.ok) return res.json();
  return null;
};

type PostWikiResult = "success" | "fail";

export const postWiki = async (arg: Wiki): Promise<PostWikiResult> => {
  const res = await fetch("http://localhost:4000/wiki", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(arg),
  });

  if (res.ok) return "success";

  return "fail";
};

type PutWikiResult = "success" | "fail";

export const putWiki = async (
  id: string,
  arg: Wiki
): Promise<PutWikiResult> => {
  const res = await fetch(`http://localhost:4000/wiki/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(arg),
  });

  if (res.ok) return "success";

  return "fail";
};
