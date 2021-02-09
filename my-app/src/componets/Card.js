import React from 'react';
import marImg from '../images/mar.png';
import '../styles/Cards.css';
import Particles from 'react-particles-js';

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <p className="hello-stranger">HELLO STRANGER</p>
          <div>
            <img src={marImg} className="astronaut" />
          </div>
        </div>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
          style={{
            backgroundImage:
              'url(2wCEAAkGBxMSEhUTExMWFhUVGRUaFxUYGBcXFxgYGBcXFxUXFhYYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGisdHR0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS03LS0tNy03Lf)',
          }}
        />
      </div>
    );
  }
}
export default Card;
