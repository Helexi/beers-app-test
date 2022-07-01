import React, { useState } from "react";

export const DataBeerContext = React.createContext();

export const DataBeer = ({ children }) => {
  const [dataBeer, setDataBeer] = useState([]);
  return (
    <DataBeerContext.Provider value={{dataBeer, setDataBeer}}>
      {children}
    </DataBeerContext.Provider>
  )
}