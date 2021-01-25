import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import ScientificButtonPannel from "./ScientificButtonPanel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DarkMode from "./DarkMode"

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }

    render() {
      return (
        <Router>
          <DarkMode />
          <div>
          <Link to='/' style={{ color: 'black'}}>nor</Link>
          <Link>/</Link>
          <Link to='/sci' style={{ color: 'orange'}}>sci</Link>
          </div>
          <Display value={this.state.next || this.state.total || "0"} />
          <Switch>
            <Route path='/'>
              <ButtonPanel clickHandler={this.handleClick}/>
            </Route>
          </Switch>
          <Switch>
            <Route path='/sci'>
              <ScientificButtonPannel clickHandler={this.handleClick}/>
            </Route>
          </Switch>
          </Router>
      );
    }
  }
