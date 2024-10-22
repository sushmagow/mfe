import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

if (typeof window !== 'undefined') {
    const root = document.querySelector('#root');
// root.render(<App />)

ReactDom.render(<App/>, root)
}
