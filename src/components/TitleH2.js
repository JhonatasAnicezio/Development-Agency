import React from 'react';
import PropTypes from 'prop-types';

function TitleH2({ title }) {
  return (
    <div className='col-12'>
      <h3 className='main-title'>{ title }</h3>
    </div>
  );
}

TitleH2.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleH2;