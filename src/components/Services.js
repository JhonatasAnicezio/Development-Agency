import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { especialidades } from '../services';
import TitleH2 from './TitleH2';

function Services() {
  return (
    <div id='services-area'>
      <div className='container'>
        <div className='row'>
          <TitleH2 title='Nossas especialidades' />
        </div>
        <div className='d-flex flex-wrap'>
          { especialidades.map((especialidade, index) =>
            <div className='col-md-4 service-box' key={ index }>
              <FontAwesomeIcon icon={ especialidade.icon } />
              <h4>{ especialidade.title }</h4>
              <p>{ especialidade.description }</p>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Services;