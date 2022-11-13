import React from 'react';
import TitleH2 from './TitleH2';
import './News.css';

function News() {
  return (
    <div>
      <div id='news-area'>
        <div className='container'>
          <TitleH2 title='Fique por dentro das novidades' />
          <p>Assine nossa lista de e-mails, e receba nossos conteúdos sobre desenvolvimento de software</p>
          <form action=''>
            <input type='email' className='form-control' id='email-input'
              name='email' placeholder='Seu e-mail'
            />
            <input type='submit' id='news-btn' value='Inscrever' />
          </form>
        </div>
      </div>
      <div id='call-area'>
        <div className='container'>
          <div className='row'>
            <p>Deseja fazer um orçaemento sem compromisso</p>
            <button className='main-btn' id='call-btn'>Orçar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;