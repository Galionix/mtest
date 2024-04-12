import { NewsResponse } from "../features/news/news.types";

export const fetchNewsFunction = async () => {
  const response = await fetch(
    "https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5"
  );
  return (await response.json()) as NewsResponse;
};
