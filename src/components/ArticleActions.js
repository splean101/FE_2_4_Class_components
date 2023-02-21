import React from 'react';

function ArticleActions(props) {
  return (
    <div className="article__actions">
      <button className="article__btn">{props.text}</button>
    </div>
  );
}

export default ArticleActions;
