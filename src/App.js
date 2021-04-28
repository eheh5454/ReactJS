import React from "react";
import {HashRouter,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";


// exact가 있어야 렌더링 한다.
// 여기서 모든 라우트에 대한 패스를 설정한다.(이 패스를 이용해 Link로 이동 가능)
function App(){
  return (
  <HashRouter>    
    <Navigation  />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie-detail" component={Detail} />
  </HashRouter>
  );
}

export default App;