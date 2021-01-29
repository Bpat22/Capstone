import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/AboutUs';
import Contact from './components/ContactUs';
import Home from './components/Home';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <br />< br />
        <Switch>
        <Route exact path = "/home" component = {Home} />

        <Route exact path = "/about" component = {About} />
        <Route exact path = "/contact" component = {Contact} />

          <Route exact path = "/login" component = {Login} />
          <Route exact path = "/register" component = {Register} />

          <Route exact path = "/login" component = {Login} />

        </Switch>
      {/* <Footer />   */}

      </BrowserRouter>      
    </div>
  );
}


export default App;
