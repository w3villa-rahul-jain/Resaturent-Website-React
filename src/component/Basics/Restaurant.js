import React from "react";
import { useState } from "react";
import "./Restaurent.scss";
import Image from "../Basics/images/images.jpg";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

// /home/rahul/react-app/src/images/images.jpg

export default function Restaurant() {
  const [menuData, setmenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setmenuData(updatedList);
  };

  const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
  ];
  console.log("check", uniqueList);
  return (
    <section>
      <nav className="navbar">
        <button className="nav-itemss" onClick={() => filterItem("breakfast")}>
          Breakfast
        </button>
        <button className="nav-itemss" onClick={() => filterItem("lunch")}>
          Lunch
        </button>
        <button className="nav-itemss" onClick={() => filterItem("Evening")}>
          Evening
        </button>
        <button className="nav-itemss" onClick={() => setmenuData(Menu)}>
          All
        </button>
      </nav>

      <MenuCard menuDataFirst={menuData} />
    </section>
  );
}
