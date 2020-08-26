import React, { Component } from "react";
import ItemMessage from "../itemMessage";
import ItemSubtitle from "../itemSubtitle";
import "./itemCart.scss";

export default class ItemCart extends Component {
  state = {
    hover: false,
    mouseLeave: false,
  };

  onMouseMove = () => {
    const { selected } = this.props;
    this.setState(({ hover, mouseLeave }) => {
      if (selected) {
        return {
          hover: !this.state.hover,
          mouseLeave: true,
        };
      } else {
        return {
          hover: !this.state.hover,
        };
      }
    });
  };

  render() {
    const {
      name,
      quality,
      taste,
      weight,
      gift,
      disabled,
      selected,
      selectedItem,
    } = this.props;
    let classNames = `cart__wrap`;
    if (selected) {
      classNames += ` cart__wrap_selected`;
    }
    if (disabled) {
      classNames += ` cart__wrap_disabled`;
    }

    return (
      <>
        <div
          className={classNames}
          onClick={selectedItem}
          onMouseEnter={this.onMouseMove}
          onMouseLeave={this.onMouseMove}
          onTouchLeave={this.onMouseMove}
          onTouchEnter={this.onMouseMove}
        >
          <ItemSubtitle hover={this.state} selected={selected} />
          <h2 className="cart__title">
            {name}
            <br />
            <span className="title-span">{taste}</span>
          </h2>
          <div className="cart__quality">{quality} порций</div>
          <div className="cart__gift">{gift}</div>

          <div className="weight">
            {weight}
            <span className="weight__span">кг</span>
          </div>
        </div>

        <ItemMessage data={this.props} selectedItem={() => selectedItem()} />
      </>
    );
  }
}
