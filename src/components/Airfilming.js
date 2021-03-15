import React from 'react';
import ReactPlayer from 'react-player';
import "./styles/Airfilming.css";



function Airfilming() {

  
    return (
        <div id="airfilming">

            <ReactPlayer
              url="https://www.youtube.com/embed/XqYg5e6mu9o?autoplay=1&loop=1&mute=1"
              loop= "true"
              controls="true"
              playing="true"
              muted= "true"
              width='100%'
              height='100%'
            />
        
        </div>
    )
}

export default Airfilming


