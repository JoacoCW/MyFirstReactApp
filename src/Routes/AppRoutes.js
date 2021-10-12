import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from '../components/Cart';
import Header from '../components/Header';

function AppRoutes() {
    return (
        <div className={'h-100'}>
            <Router>
                <NavBar/>
                <Header />
                <Switch>
                    <Route path='/' exact component={ItemListContainer} />
                    <Route path='/products/:id' exact component={ItemDetailContainer} />
                    <Route path='/cart' exact component={Cart} />
                </Switch>
            </Router>
        </div>
    );
}

export default AppRoutes;
/*
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
          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
          <Componente texto="Tu carro" numero={1}/>
          <Componente texto="Tu carro" numero={0}/>
        </Switch>
      </Router>
    
  );
}*/