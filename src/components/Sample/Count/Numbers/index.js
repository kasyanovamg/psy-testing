import React, {Component} from "react";

export class Numbers extends Component {
  state = {
    value: null,
  };
  firstNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  secondNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  sign = Math.round(Math.random());

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  checkResult = () => {
    const first = parseInt(this.firstNumber);
    const second = parseInt(this.secondNumber);
    const result = this.sign  ? first + second : first - second;
    //return parseInt(this.state.value) === result ? console.log("yes") : console.log("No")
    this.props.setAnswer({
      index: this.props.elIndex,
      res: parseInt(this.state.value) === result})
  }

  render() {
    const {firstNumber, secondNumber, sign} = this;
    const {disabled} = this.props;

    return (
      <div>{this.props.row} {this.props.elIndex}
        <div>{firstNumber}</div>
        <div> {sign ? "+" : "-"} </div>
        <div>{secondNumber}</div>
        <input onChange={this.handleChange} disabled={disabled} onBlur={this.checkResult}/>
      </div>
    )
  }
}