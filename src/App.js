import React, { Component } from 'react';
// import ArticleBody from "./components/ArticleBody";
// import ArticleActions from "./components/ArticleActions";
import Article from './components/Article';

const EN = {
  title_text: 'NVIDIA NEWS',
  p_title_text: 'NVIDIA Accelerated AI on Azure',
  button_text: 'Read',
  description: 'Article description:',
  description_text:
    'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  current_lang: 'EN',
};
const UA = {
  title_text: 'НОВИНИ NVIDIA',
  p_title_text: 'Прискорений штучний інтелект NVIDIA в Azure',
  button_text: 'Читати',
  description: 'Опис статті:',
  description_text:
    'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  current_lang: 'UA',
};

let langBtns;

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: EN,
    };
  }

  componentDidMount() {
    langBtns = document.querySelectorAll('.lang-btn');
    langBtns[1].classList.add('active');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      langBtns.forEach((btn) => btn.classList.remove('active'));
      this.state.lang.current_lang === 'UA'
        ? langBtns[0].classList.add('active')
        : langBtns[1].classList.add('active');
    }
  }

  SetLangEN() {
    this.setState({ lang: EN });
  }

  SetLangUA() {
    this.setState({ lang: UA });
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">NVIDIA news</h1>{/* Title */}
        <Article lang={this.state.lang}>
          <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>{/* ArticleTitle */}
          </div>
        </Article>
        <div className="lang">
          <button onClick={this.SetLangUA.bind(this)} className="lang-btn">
            UA
          </button>
          <button onClick={this.SetLangEN.bind(this)} className="lang-btn">
            EN
          </button>
        </div>
      </div>
    );
  }
}

export default App;
