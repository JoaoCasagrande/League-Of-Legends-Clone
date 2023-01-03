import React from 'react';

import '../styles/LoadScreen.css';
import lines from '../assets/fundolinhas.png';
import Progressbar from '../components/Progressbar';

function LoadScreen() {
    return (
        <div className='loadScreenFull'>
            <div className="firstLayer" style={{
                backgroundImage: `url(${lines})`
            }}>
            </div>
            <div className='secondLayer'></div>
            
            <hr className='centerLine' />

            <div className='circleFrame circle'>
                <hr className='centerLine' />

                <div className='circleBorder circle'>
                    <div className='circleFrameBorder circle' style={{
                        backgroundImage: `url(${lines})`
                    }}>
                        <div className='endCircle circle'>
                            <img className='logoImage' src='/logo.png' alt='logo do jogo'/>
                            <label className='progressDescription'>Loading</label>

                            <Progressbar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default LoadScreen;