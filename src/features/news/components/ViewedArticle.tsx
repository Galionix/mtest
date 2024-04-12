import { News } from "../news.types";

export const ViewedArticle = ({ article }: { article: News | undefined }) => {
  if (!article) {
    return null;
  }
  return (
    <article>
      <h1>{article.title_normal}</h1>
      <h2>{article.title}</h2>
      <p>Publisher: {article.publisher}</p>
      <p>Country: {article.country}</p>
      <p>Language: {article.language.join(", ")}</p>
      <p>City: {article.city.join(", ")}</p>
      <p>State: {article.state.join(", ")}</p>
      <p>Place: {article.place.join(", ")}</p>
      <p>Frequency: {article.frequency}</p>
      <p>Start Year: {article.start_year}</p>
      <p>End Year: {article.end_year}</p>
    </article>
  );
};
