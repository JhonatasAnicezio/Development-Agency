import React from 'react';
import { arrData } from '../services';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import imageParallax from '../img/cidadeparallax.png';
import 'react-circular-progressbar/dist/styles.css';
import './Data.css';
import AnimatedProgressProvider from '../AnimatedProgressProvider';

function Data() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: imageParallax,
          speed: -20,
        },
      ]}
      style={{
        aspectRatio: '2 / 1',
        width: '100%',
        height: '400px',
      }}
    >
      <ParallaxBannerLayer>
        <div id='data-area'>
          <div className='container'>
            <div className='row'>
              { arrData.map((data, index) =>
                <div key={ index } className='col-md-3 circle-box'>
                  <i> 
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={ data.value }
                      duration={1.4}
                      easingFunction={ easeQuadInOut }
                      repeat
                    >
                      { value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value = { value }
                            maxValue= { data.value }
                            text={ roundedValue }
                            circleRatio={ 1 }
                            strokeWidth={5}
                            styles={ buildStyles({
                              textColor: '#54DAF9',
                              pathColor: '#54DAF9',
                              pathTransition: 'none',
                            })}
                          />
                        );
                      } }
                    </AnimatedProgressProvider>
                  </i>
                  <div id={`circle${ data.circle }`} />
                  <p>{ data.description }</p>
                </div>
              ) }
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default Data;