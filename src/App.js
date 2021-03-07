import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Country from './components/Country/Country';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home"><Home></Home></Route>
          <Route path="/Country/:CountryName"><CountryDetails></CountryDetails></Route>
          <Route exact path="/"><Home></Home></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
