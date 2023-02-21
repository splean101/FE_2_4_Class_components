import React from 'react';
import LangContext from './lang-context';

function Title() {
  return (
    <LangContext.Consumer>
      {(context) => {
        return <h1 className="title">{context.title_text}</h1>;
      }}
    </LangContext.Consumer>
  );
}

export default Title;
