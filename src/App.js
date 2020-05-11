import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import ToDo from './Component/ToDo/ToDo';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Footer} />
          <Route path='/todo' component={ToDo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
