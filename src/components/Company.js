import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import patternImg from '../img/pattern.png';
import './Company.css';

function Company() {
  return (
    <div id='apply-area'>
      <div className='row'>
        <div className='col-md-6 apply-box' id='company-img'></div>
        <div className='col-md-6'>
          <ParallaxBanner
            layers={[
              {
                image: patternImg,
                speed: -20,
              },
            ]}
            style={{
              aspectRatio: '2 / 1',
              height: '100%',
            }}
          >
            <ParallaxBannerLayer>
              <div className='col-md-12 apply-box' id='pattern-img'>
                <h4>Gosta de desafios?</h4>
                <p>Temos várias posições abertas, entre elas: Software Enginer, UI/UX Designer, Project Manager e mais.</p>
                <p>Clique no botão abaixo e confira os benefécios e as posições em aberto.</p>
                <p>Aqui você terá a chance de trabalhar com as melhores tecnologias e os profissionais mais capacitados.</p>
                <a href='#' className='main-btn' id='apply-btn'>Saiba Mais</a>
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </div>
      </div>
    </div>
  );
}

export default Company;