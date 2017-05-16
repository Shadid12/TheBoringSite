import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ComponentList } from './components/ComponentList';


class App extends Component {
  
  
  render() {
    return (
      <BrowserRouter >
        <div className="container">
          <Route path="/" component={ Home } />
          <Route path="/components" component={ ComponentList } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
