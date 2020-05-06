import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
  const currentArticles = props.currentlyDisplayed.map(currentArticle => {
    return(
      <NewsArticle
      headline={currentArticle.headline}
      description={currentArticle.description}
      img={currentArticle.img}
      url={currentArticle.url}
      />
    );
  });
  return(
    <aside className="news-articles-container">
      {currentArticles}
    </aside>
  );
}

export default NewsContainer;
