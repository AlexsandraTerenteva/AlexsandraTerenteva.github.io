import React, { Component } from "react";

export default class ItemSubtitle extends Component {
  state = {
    title: "",
  };

  render() {
    const { hover, mouseLeave } = this.props.hover;
    const { selected } = this.props;
    let title;
    if (hover && selected && mouseLeave) {
      title = `Котэ не понравилось?`;
    } else {
      title = `Сказочное заморское яство`;
    }

    return (
      <div>
        <div className="subtitle">{title}</div>
      </div>
    );
  }
}
