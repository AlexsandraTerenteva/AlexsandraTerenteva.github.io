import React, { Component } from "react";
import "./app.scss";
import "./fonts.scss";
import Hero from "../hero/hero";

export default class App extends Component {
  state = {
    data: [
      {
        name: "Нямушка",
        quality: 10,
        gift: "мышь в подарок",
        taste: "с фуа-гра",
        desc: "Печень утки разварная с артишоками.",
        weight: "0,5",
        id: 1,
        disabled: false,
        selected: false,
      },
      {
        name: "Нямушка",
        quality: 40,
        gift: " 2 мыши в подарок",
        taste: "с рыбой",
        desc: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        weight: "2",
        id: 2,
        disabled: false,
        selected: false,
      },
      {
        name: "Нямушка",
        quality: 100,
        gift: "5 мышей в подарок зачазчик доволен",
        taste: "с курой",
        desc: "Филе из цыплят с трюфелями в бульоне.",
        weight: "5",
        id: 3,
        disabled: true,
        selected: false,
      },
    ],
  };

  selectedItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const old = data[index];
      const newItem = { ...old, selected: !old.selected };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };

  changeSubtitle = (id, subtitle) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const old = data[index];
      const newItem = { ...old, subtitle: subtitle };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <Hero
          data={data}
          selectedItem={this.selectedItem}
          changeSubtitle={this.changeSubtitle}
        />
      </div>
    );
  }
}
