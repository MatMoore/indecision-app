import React from 'react'
import ReactDOM from 'react-dom'

const template = React.createElement('p', {}, 'Hello world');

ReactDOM.render(template, document.getElementById('app'));