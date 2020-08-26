import React, { Component } from "react";
import "./itemMessage.scss";

export default class ItemMessage extends Component {
  render() {
    const { selected, taste, desc, disabled } = this.props.data;
    const { selectedItem } = this.props;
    if (!selected && !disabled) {
      return (
        <div className="message">
          Что сидишь? Порадуй котэ,
          <a className="message__link" href="#" onClick={selectedItem}>
            купи.
          </a>
        </div>
      );
    }

    const messageSelected = selected ? desc : false;
    const messageDisabled = disabled ? `Печалька, ${taste} закончился.` : false;
    return (
      <div className="message">
        <div className="message__desc">{messageSelected}</div>
        <div className="message__desc message__desc_disable">
          {messageDisabled}
        </div>
      </div>
    );
  }
}
