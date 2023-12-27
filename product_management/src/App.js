import './App.css';
import Navbar from './components/first_Page/Navbar';
import BasicGrid from './components/first_Page/BasicGrid';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/first_Page/Login';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './database/firebaseAuth'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [authentification, setAuthentification] = useState(true)
  useEffect(() => {
    //onAuthStateChanged kaydeclancha mnin luser,  logged in , logged out 
    //onAuthStateChanged => first load => user=null mais user connected==> user!=null
    // had callback function katexecuta
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthentification(true)
      } else {
        setAuthentification(false)
      }
    });
  }, [])
  // katgol bli had useEffect kaytexecuta only once , makaydependi 3la 7ta chi state
  return (

    <div className="App">
      <BrowserRouter> {/* bach tactivi routing dialek */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            {authentification ? (
              <Redirect to="/Home" />
            ) : (
              <Redirect to="/Login" />
              // redecting users to differents routes 
            )}
          </Route>
          <Route path="/Register">
            <BasicGrid />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

        </Switch>
      </BrowserRouter>


    </div >
  );
}

export default App;
