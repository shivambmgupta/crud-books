import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/Index';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
