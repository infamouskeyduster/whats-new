import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return(
    <article className="news-article">
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <img src={props.img} alt=""/>
      <a href={props.url}>Click Here to See Full Article</a>
    </article>
  );
}

export default NewsArticle;
