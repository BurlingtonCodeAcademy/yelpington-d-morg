import Home from "./components/Home"
import './App.css';
// import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailedView from "./components/DetailedView";

function App() {

  return(
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path ="/restaurant/:id" component={DetailedView} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
