// JS
// const element = document.createElement('h1');
// element.innerText = 'Hola Mundo';
// const container = document.getElementById('root');
// container.appendChild(element);

// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componets/Card';

const container = document.getElementById('root');

// ReactDOM.render(2 parametros: Elemto a renderear, y donde lo la a renderear)
ReactDOM.render(<Card></Card>, container);
