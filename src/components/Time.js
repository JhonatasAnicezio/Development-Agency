import React from 'react';
import { time } from '../services';
import TitleH2 from './TitleH2';
import './Time.css';

function Time() {
  return (
    <div id='team-area'>
      <div className='container'>
        <div className='row'>
          <TitleH2 title='Nosso time' />
          { time.map((profile, index) =>
            <div key={ index } className='col-md-3'>
              <div className='card'>
                <img
                  src={ profile.img }
                  className='card-img-top'
                  alt={`Imagem de Perfil ${index + 1}`}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{ profile.name }</h5>
                  <p className='card-text'>{ profile.office }</p>
                </div>
              </div>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Time;