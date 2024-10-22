import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history'

// mount
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    if (onNavigate) {
        history.listen(onNavigate)
    }
    // el.innerHTML = 'hi'
    ReactDOM.render(
        <App history={history}/>,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if(nextPathname!== pathname)
            history.push(nextPathname);
        }
    }
}
// if dev
if(process.env.NODE_ENV == 'development') {
    const el = document.querySelector('#_marketing-dev');
    if (el) {
        mount(el, { defaultHistory: createBrowserHistory() })
    }
}
// if used in container
export { mount }