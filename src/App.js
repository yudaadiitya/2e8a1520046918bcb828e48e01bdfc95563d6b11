import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
