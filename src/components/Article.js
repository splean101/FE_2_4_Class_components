import React, { Component } from 'react';
import ArticleActions from './ArticleActions';
import ArticleBody from './ArticleBody';

function Article(props) {
    console.log('ArtProps', props);
  return (
    <div className="article">
      {props.children}
      <ArticleBody lang={props.lang} />
      <ArticleActions text={props.lang.button_text} />
    </div>
  );
}
export default Article;
