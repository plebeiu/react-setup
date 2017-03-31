import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    /* dev tools code*/
    window.devToolsExtension ? window.devToolsExtension():f=>f
));


ReactDOM.render(
     <Provider store={store}>
     <App />
     </Provider>,
document.getElementById('root')
 )