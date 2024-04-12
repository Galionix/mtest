import React, { createElement, useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store";
import { fetchNews, setFilter } from "./features/news/actions";
import {
  selectFilteredNews,
  selectStatus,
  selectViewedArticle,
} from "./features/news/selectors";
import { getNewsTitlesElements } from "./features/news/utils";
import { ViewedArticle } from "./features/news/components/ViewedArticle";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header>
      <h1>News</h1>
      {/* filter news */}
      <input
        type="text"
        placeholder="Filter news by title"
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </header>
  );
};
function App() {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectFilteredNews);

  const status = useAppSelector(selectStatus);
  const viewedArticle = useAppSelector(selectViewedArticle);

  const newsTitles = news.map((article) => ({
    title: `${article.title} [${article.title_normal}]`,
    id: article.id,
  }));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
    setInterval(() => {
      dispatch(fetchNews());
    }, 20_000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const marquee = createElement(
    "marquee",
    {},
    getNewsTitlesElements(newsTitles, dispatch)
  );

  return (
    <>
      <Header />
      <div className="App">
        {marquee}
        <main>
          <ViewedArticle article={viewedArticle} />
        </main>
      </div>
    </>
  );
}

export default App;
