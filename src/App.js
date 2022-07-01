import React, { useCallback, useContext, useEffect } from 'react';
import { CardList } from './components/CardList/CardList';
import './App.css';
import { DataBeerContext } from './components/CardList/DataContext';

function App() {
  const {dataBeer, setDataBeer} = useContext(DataBeerContext);
  const innerFunction = useCallback(async function fetchDataBeer() {
    const serverDataBeer = await fetch('https://api.punkapi.com/v2/beers');
    const data = await serverDataBeer.json();
    setDataBeer(data);
  }, []);

  useEffect(() => {
    innerFunction();
  }, [innerFunction])

  const beerWithPizza = () => {
    setDataBeer([...dataBeer].filter(item => {
      return item.food_pairing.find(value => value.includes('pizza'))
    }
  ))}

  const beerWithBurger = () => {
    setDataBeer([...dataBeer].filter(item => {
      return item.food_pairing.find(value => value.includes('burger'))
    }
  ))}

  const allBeers = () => {
    innerFunction()
  }
 
  return (
    <CardList 
      beerWithPizza={beerWithPizza}
      beerWithBurger={beerWithBurger}
      allBeers={allBeers}
    />
  );
}

export default App;
