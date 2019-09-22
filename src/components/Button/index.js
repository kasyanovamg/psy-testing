import React, {Component} from 'react';
import './styles.css'

export class Button extends Component {
  nameOfClass = () => {
    switch (this.props.nameOfClass) {
      case 'next':
        return 'button-next';
      default:
        return 'button-main';
    }
  };

  render() {
    const {text, onClick} = this.props;
    return (
      <button className={this.nameOfClass()} onClick={onClick}>{text}</button>
    )
  }
}