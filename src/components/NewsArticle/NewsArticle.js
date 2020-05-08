import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return(
    <article className="news-article">
      <h3>{props.headline}</h3>
      <hr></hr>
      <p>{props.description}</p>
      <img src={props.img} alt=""/>
      <a href={props.url} rel="noopener">
          <p id="hyperlink">Click to see full article <span className="arrow-icon">➜</span></p>
      </a>
    </article>
  );
}

export default NewsArticle;
