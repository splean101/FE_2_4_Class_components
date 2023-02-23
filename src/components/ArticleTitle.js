import React from 'react';
import LangContext from './lang-context';

function ArticleTitle(props) {
  return (
    <LangContext.Consumer>
      {(context) => {
        return <h2>{context.p_title_text}</h2>;
      }}
    </LangContext.Consumer>
  );
}

export default ArticleTitle;
