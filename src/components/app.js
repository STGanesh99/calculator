import React from 'react';
import Bpp from './bpp';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Displayans from './displayans';
import Print from "./print.js";
function App(props){
    return(
        <Router>
        <div>
        <Route exact path="/" component = {Bpp} ></Route>
        </div>
        </Router>
    )
}
export default App;