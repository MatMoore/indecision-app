import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import Modal from 'react-modal';
import './styles/styles.scss';

const root = document.getElementById('app');
Modal.setAppElement(root);

ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, root);