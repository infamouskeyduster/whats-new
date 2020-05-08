import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
  let placeholderArr = props.currentlyDisplayed; //Currently displayed shows ALL articles for a certain when clicked on

  if (props.filteredResult.length) {
    placeholderArr = props.filteredResult;
  }

  const currentArticles = placeholderArr.map(currentArticle => {
    return(
      <NewsArticle
      key={currentArticle.id}
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
