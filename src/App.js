import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './style'
import 'antd/dist/antd.css'
import 'swiper/css/swiper.min.css'
import store from './store';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
