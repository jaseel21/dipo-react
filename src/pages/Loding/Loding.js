import React, { useEffect } from 'react';
import './Loding.css';
import { useNavigate } from 'react-router-dom';

function Loding() {
  useEffect(() => {
    let progressBar = document.querySelector('.circular-progress');
    let valueContainer = document.querySelector('.value-container');
    let progressValue = 0;
    let progressEndValue = 100;
    let speed = 15;

    let progress = setInterval(() => {
      progressValue++;
      valueContainer.textContent = `${progressValue}`;
      progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
      )`;
      if (progressValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

    return () => {
      clearInterval(progress);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="loding-body">
      <div className="Loding-container">
        <div className="circular-progress">
          <div className="value-container"></div>
        </div>
        {/* <div className="loding-btn-container">
          <button onClick={() => navigate('/')} id="lod-btn" className="loding-btn">
            Get Start
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Loding;
