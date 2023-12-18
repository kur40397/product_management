import logo from './logo.svg';
import './App.css';

import { Navbar, Services, About } from './components/Imports'
import { Route, Switch, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* kayjma3 lik ayi 7aja 3andha 3laka m3a routing */}
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
