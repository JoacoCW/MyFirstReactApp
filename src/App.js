import React from 'react';
import './App.css';
import 'bootstrap';
import AppRoutes from "./Routes/AppRoutes";
import {ProviderCustomizado} from "./components/CartContext";


const App = () => {

  return (

        <ProviderCustomizado>
            <AppRoutes/>
        </ProviderCustomizado>
    );
}

export default App;