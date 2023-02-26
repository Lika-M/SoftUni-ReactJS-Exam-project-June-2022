import { createContext, useState, useEffect } from "react";

import * as dataService from '../services/dataService.js';

export const DataContext = createContext();

export function DataProvider({
  children
}) {
  const [plants, setPlants] = useState({
    items: [],
    currentType: ''
  });

  useEffect(() => {
    dataService.getAll()
      .then(result => {
        // if (result.length > 0) {
          setPlants({ items: result, currentType: 'All' });
        // }
      })
  }, [])

  function addPlant(newItem) {
    setPlants(state => {
      return {
        ...state,
        items: [...state.items, newItem]
      };
    })
  };

  function updatePlants(item, id) {
    setPlants(state => {
      const plant = state.items.find(x => x.objectId === id);
      const updatedItems = state.items.filter(x => x !== plant);
      updatedItems.push(item);
      return {
        ...state,
        items: updatedItems,
      };
    })
  }

  function removePlant(id) {
    setPlants(state => {
      const plant = state.items.find(x => x.objectId === id);
      const updatedItems = state.items.filter(x => x !== plant);
      return {
        ...state,
        items: updatedItems
      };
    })
  }

  return (
    <DataContext.Provider value={{ plants, addPlant, updatePlants, removePlant }}>
      {children}
    </DataContext.Provider>
  );
}