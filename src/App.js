import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap';
import Componente from './components/Componente';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/categoria/:id'>
            <ItemListContainer />
          </Route>
          <Componente texto="Tu carro" numero={1}/>
          <Componente texto="Tu carro" numero={0}/>
          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    
  );
}


export default App;