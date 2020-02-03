import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Topics from "./components/topics";
import About from "./components/about";
import Contact from "./components/contact";



export default function App() {
  return (
    <Router>
      
      <div className="header-wrap">
        <nav>
          <ul>


            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            


            <li>
              <Link to="/topics">Topics</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            


          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/About">
            <About />
          </Route>

          
          
          <Route path="/topics">
            <Topics />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
          </Route>
         

        </Switch>
      </div>
      
    </Router>
  );
}
