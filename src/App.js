import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './components/DropDownContainer/DropDown';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './components/Assets/logo.png';



import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
import GameStats from './components/GameStatsContainer/GameStats';
import Donate from './components/DonateContainer/Donate';
import ForgotPassword from './components/PasswordContainer/ForgotPassword';
import SpanishPage from './components/Instructions/SpanishInstruction';
import EnglishPage from './components/Instructions/EnglishInstruction';
import EnglishInstruction from './components/Instructions/EnglishInstruction';

function App() {
  return (<Router>
      <Container className = "Container">

    <div className="App">
    <Row className = "Row">
        <Image src={ Logo } alt= "Code Diffrently Logo"
        className = "logo"/>
    </Row>
    <Row className = "Row">
        <DropDown/>
    </Row>
    <Row className = "Row welcome">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={WelcomeScreen} />
            <Route path = '/welcome-screen' component={WelcomeScreen}/>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path = "/game-stats" component={GameStats}/>
            <Route path="/donate" component={Donate}/>
            <Route path ="/forgot-password" component = {ForgotPassword}/>
            <Route path = "/spanish-instruction" component = {SpanishPage}/>
            <Route path = "/english-instruction" component = {EnglishInstruction}/>
          </Switch>
        </div>
      </div>
      </Row>
    </div>
    </Container>
    </Router>
  );
}

export default App;
