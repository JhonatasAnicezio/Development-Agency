import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import agenciaJpg from '../img/agencia.jpg';
import { diferenciais } from '../services';
import './AboutArea.css';

function AboutArea() {
  return (
    <div className='container-fluid'>
      <div id='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='main-title'>Sobre a hDC agency</h3>
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src={ agenciaJpg }/>
            </div>
            <div className='col-md-6'>
              <h3 className='about-title'>Uma agência que pensa no futuro</h3>
              <p>Nossos projetos são adaptados aos nossos clientes e seus propósitos.</p>
              <p>Após a especificação dos projetos os arquitetos de software definirão as melhores tecnologias para o seu projeto.</p>
              <p>E nossos designers trablharão na susa interface/layout para impulsinonar os seus negócios.</p>
              <p>Veja outros diferencias:</p>
              <ul id='about-list'>
                { diferenciais.map((text, index) =>
                  <li key={ index }>
                    <i>
                      <FontAwesomeIcon icon={ faCheck } />
                    </i>
                    { text }
                  </li>
                ) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArea;