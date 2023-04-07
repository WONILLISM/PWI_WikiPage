import { Wiki } from "../interfaces/Data";

export const getWiki = async (): Promise<Wiki[] | null> => {
  const res = await fetch("http://localhost:4000/wiki", {
    method: "GET",
  });

  if (res.ok) return res.json();
  return null;
};
