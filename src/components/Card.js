import React, {Component} from 'react';
import classnames from 'classnames';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let buttonIdx = this.props.idx;
    this.props.matchCards(this);
  }

  render() {
    let classes = `card fa-lg ${this.props.iconName} ${this.props.isFlipped ? 'flipped' : ''} ${this.props.isMatched ? 'matched' :''}`;
    return (
          <div className={classes} disabled={this.props.isMatched} onClick={this.handleClick}></div>
    );
  }
}