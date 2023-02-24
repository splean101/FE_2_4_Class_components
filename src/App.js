import React, { Component } from 'react';
import Title from './components/Title';
import Article from './components/Article';

import LangContext from './components/lang-context';

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
    if (localStorage.getItem('lang') === null) {
      this.setState({ lang: EN });
    } else if (localStorage.getItem('lang') === 'EN') {
      this.setState({ lang: EN });
      return;
    } else {
      this.setState({ lang: UA });
    }
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
    localStorage.setItem('lang', 'EN');
  }

  SetLangUA() {
    this.setState({ lang: UA });
    localStorage.setItem('lang', 'UA');
  }

  render() {
    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>
          <Title />
          <Article />
          <div className="lang">
            <button onClick={this.SetLangUA.bind(this)} className="lang-btn">
              UA
            </button>
            <button onClick={this.SetLangEN.bind(this)} className="lang-btn">
              EN
            </button>
          </div>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
