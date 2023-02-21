import React from 'react';
import LangContext from './lang-context';

function ArticleActions() {
  return (
    <LangContext.Consumer>
      {(context) => {
        return (
          <div className="article__actions">
            <button className="article__btn">{context.button_text}</button>
          </div>
        );
      }}
    </LangContext.Consumer>
  );
}

export default ArticleActions;
