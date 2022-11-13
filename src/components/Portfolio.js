import React, { useState } from 'react';
import { listImg, filterBtn } from '../services';
import TitleH2 from './TitleH2';
import './Portifolio.css';

function Portfolio() {
  const [ arrBtn, setArrBtn ] = useState(filterBtn);
  const [ imgs, setImgs ] = useState(listImg);

  const handleOnClick = ({ target }) => {
    const removeClass = filterBtn.map((btn) => {
      let { clas, id, name } = btn;
      target.name == name ? clas = 'active': clas = '';
      return {
        clas,
        id,
        name,
      };
    });
    const filterImgs = listImg.filter((img) => img.topic == target.id);
    target.id == 'all'? setImgs(listImg) : setImgs(filterImgs);
    setArrBtn(removeClass);
  };

  return (
    <div id='portfolio-area'>
      <div className='container'>
        <div className='row'>
          <TitleH2 title='Conheça nossos projetos' />
          <div className='col-md-12' id='filter-btn-box'>
            { arrBtn.map((btn, index) =>
              <button onClick={handleOnClick} key={ index } className={`main-btn filter-btn ${btn.clas}`}
                id={ btn.id } name={ btn.name }>
                { btn.name }
              </button>
            ) }
          </div>
          { imgs.map((img, index) =>
            <div key={ index } className={`col-md-4 project-box ${ img.topic }`}>
              <img src={ img.img } className='img-fluid' alt={` Projeto${ index + 1 } `} />
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Portfolio;