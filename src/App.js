import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap';
import Componente from './components/Componente';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';


const App = () => {
  return (
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route path='/' component={ItemListContainer} exact />
          <Route path='/categoria/:id' component={ItemListContainer} />
          <Componente texto="Tu carro" numero={1}/>
          <Componente texto="Tu carro" numero={0}/>
        </Switch>
      </Router>
    
  );
}


export default App;