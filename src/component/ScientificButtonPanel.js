import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

export default class ScientificButtonPannel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="+/-" clickHandler={this.handleClick} orange />
          <Button name="sqr" clickHandler={this.handleClick} orange />
          <Button name="sqrt" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}


