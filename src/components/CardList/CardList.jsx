import React, { useState, useContext } from "react";
import { Card } from "../Card/Card";
import { DataBeerContext } from "./DataContext";
import "./CardList.css";

export const CardList = ({ beerWithPizza, beerWithBurger, allBeers }) => {
  const { dataBeer } = useContext(DataBeerContext);
  const [searchSort, setSearchSort] = useState("");

  const filterStatus = () => {
    switch (searchSort) {
      case "abv ascending":
        return [...dataBeer].sort((a, b) => a.abv - b.abv)

      case "abv descending":
        return [...dataBeer].sort((a, b) => b.abv - a.abv)

      case "name descending":
        return [...dataBeer].sort((a, b) => b.name.localeCompare(a.name));

      case "name ascending":
        return [...dataBeer].sort((a, b) => a.name.localeCompare(b.name));

      default:
        return [...dataBeer];
    }
  }

  console.log(dataBeer)

  return (
    <>
      <div className="allButtons-wrap">
        <div className="allButtons">
          <button className="concave button" onClick={allBeers}>All bears</button>
          <button className="concave button" onClick={beerWithPizza}>Beers with pizza</button>
          <button className="concave button" onClick={beerWithBurger}>Beer with burger</button>
        </div>
      </div>
      <form className="select">
        <select className="selectItems" value={searchSort} onChange={(event) => setSearchSort(event.target.value)}>
          <option value="">---chouse---</option>
          <option value="abv ascending">abv ascending</option>
          <option value="abv descending">abv descending</option>
          <option value="name ascending">name ascending</option>
          <option value="name descending">name descending</option>
        </select>
      </form>
      <div>
      <div className="cardList">
        {filterStatus().map(item => {
          return (
            <Card
              key={item.id}
              name={item.name}
              abv={item.abv}
              image_url={item.image_url}
              tagline={item.tagline}
              description={item.description}
              food_pairing={item.food_pairing}
            />
          )
        })}
      </div>
      </div>
    </>
  )
}