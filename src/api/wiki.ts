import { Wiki } from "../interfaces/Data";

export const getWiki = async (): Promise<Wiki[] | null> => {
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
