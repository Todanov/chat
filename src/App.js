import React, { useState } from 'react';

import './App.css';

function App() {

  const [hightLightStyle , setHightLightStyle] = useState({
   left: 0 
  })

  function moveHighight(event) {
    console.log(event.nativeEvent)
    setHightLightStyle({
      left: event.nativeEvent.layerX - 150,
    })
  }
 

  return (
    <div className="App">
      <div className="browser">
        <div className="tabs">
          <div className="tab" onMouseMove={moveHighight}>
          <div className="highlight"  style={{hightLightStyle}}/>
            <a> Home  </a>
          </div>
          <div className="tab">
            <a> About
            </a>
          </div>
          <div className="tab">
            <a> Featurs
            </a>
          </div>
        </div>
        <div className='viewport'>Pages Go here</div>
      </div>
    </div>
  );
}

export default App;
