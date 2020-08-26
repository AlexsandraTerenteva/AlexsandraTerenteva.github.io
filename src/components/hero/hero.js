import React, { Component } from "react";
import ItemCart from "../itemCart";

import "./hero.scss";

export default class Hero extends Component {
  render() {
    const { data, selectedItem } = this.props;

    const carts = data.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <div className="cart" key={id}>
          <ItemCart {...itemProps} selectedItem={() => selectedItem(id)} />
        </div>
      );
    });
    return (
      <div className="hero">
        <h1 className="title">Ты сегодня кормил кота?</h1>
        <div className="wrap">{carts}</div>
      </div>
    );
  }
}
