import React from "react";
import "./App.css";
import HomePage from "src/Containers/HomePage";
import Supliers from "src/Component/Supliers";
import Help from "src/Component/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "src/Component/Header";
import NavBar from "src/Component/NavBar";
import Landing from "src/Component/Choose_Disaster";
import Login from "src/Component/LoginVictim/Login";
import SOS from "src/Containers/SOS";
import LoginRescue from "src/Component/LoginRescue/AppRescue";
import LoginResc from "src/Component/LoginforRescue/LoginResc";
import forgot from "src/Component/PasswordAuth/forgot";
import reset from "src/Component/PasswordAuth/reset";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/Help" exact component={Help} />
        <Route path="/Supliers" eaxact component={Supliers} />
        <Route path="/Landing" eaxact component={Landing} />
        <Route path="/Login" exact component={Login} />
        <Route path="/SOS" exact component={SOS} />
        <Route path="/LoginRescue" exact component={LoginRescue} />
        <Route path="/LoginResc" exact component={LoginResc} />
        <Route path="/forgot" exact component={forgot} />
        <Route path="/reset-password" exact component={reset} />
      </div>
    </Router>
  );
}

export default App;
