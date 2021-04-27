import React from "react";
import {HashRouter,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

// exact가 있어야 렌더링 한다.
function App(){
  return (
  <HashRouter>    
    <Navigation  />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
  );
}

export default App;