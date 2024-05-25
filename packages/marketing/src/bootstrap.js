import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount
const mount = (el) => {
    // el.innerHTML = 'hi'
    ReactDOM.render(
        <App />,
        el
    )
}
// if dev
if(process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#_marketing-dev');
    if (el) {
        mount(el)
    }
}
// if used in container
export { mount }