import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
import Detail from './pages/detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
    return (
        // think of each page as a "state" for your webpage that has it's own component
        <Router>
            {/*  A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/about"><About/></Route>
                {/* {:} means useParams which passes the info {value} of id to the route {Detail}*/}
                <Route path="/cocktails/:id"><Detail/></Route>
                <Route path="*"><Error/></Route>
            </Switch>
        </Router>
    )
}

export default App
