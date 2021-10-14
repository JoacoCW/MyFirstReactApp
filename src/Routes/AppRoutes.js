import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from '../components/Cart';
import Header from '../components/Header';
/*import Noficcion from '../components/Noficcion'*/

function AppRoutes() {
    return (
        <div className={'h-100'}>
            <Router>
                <NavBar/>
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
                  <Route exact path='/cart'>
                    <Cart />
                  </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default AppRoutes;