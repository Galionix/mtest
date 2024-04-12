/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { createElement, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store";
import {
  AnyNewsAction,
  fetchNews,
  setFilter,
  setViewIndex,
} from "./features/news/actions";
import {
  selectFilteredNews,
  selectNews,
  selectStatus,
  selectViewedArticle,
} from "./features/news/selectors";
import { Dispatch } from "redux";
import { News } from "./features/news/news.types";

const newsTitlesElements = (
  news: {
    title: string;
    id: string;
  }[],
  dispatch: Dispatch<AnyNewsAction>
) => {
  return news.map((article) => (
    <button
      onClick={() => {
        dispatch(setViewIndex(article.id));
        // console.log(article.id);
      }}
      key={article.id}
    >
      {article.title}
    </button>
  ));
};
const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header>
      {/* <img src={logo} height={"20px"} className="App-logo" alt="logo" /> */}
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
  }, []);

  const marquee = createElement(
    "marquee",
    {},
    newsTitlesElements(newsTitles, dispatch)
  );

  const viewedArticle = useAppSelector(selectViewedArticle);
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

const ViewedArticle = ({ article }: { article: News | undefined }) => {
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

export default App;
