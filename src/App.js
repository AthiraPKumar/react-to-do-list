import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './components/lists';
import AboutUs from './components/aboutus';
import Error from './components/error';
import Navigation from './components/navigation';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation/>
      <Switch>
        <Route path="/" component={TodoList} exact/>   
        <Route path="/about" component={AboutUs}/>
        <Route component={Error}/>
      </Switch>
    </div>  
    </BrowserRouter>
  );
}

export default App;
