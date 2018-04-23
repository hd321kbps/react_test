import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', {className:'subtitle'}, 'Это мое первое приложение на React');
const container = React.createElement('div', null, title, subtitle)

ReactDOM.render(container, document.getElementById('root'));