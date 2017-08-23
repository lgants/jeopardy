import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './reducers';
import App from './components/App';
import Category from './components/Category';
import './index.css';
import Root from './containers/Root';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Root>
            <Route exact path="/" component={App} />
            <Route exact path="/category" component={Category} />
          </Root>
        </Switch>
      </BrowserRouter>
  </Provider>,
document.getElementById('root'));
