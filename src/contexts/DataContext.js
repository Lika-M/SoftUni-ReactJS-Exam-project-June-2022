import { createContext, useState, useEffect} from "react";
import * as dataService from '../services/dataService.js'

export const DataContext = createContext();

export function DataProvider ({
    children
}){
    const [plants, setPlants] = useState({ items: [], currentType: '' });
 

    useEffect(() => {
      dataService.getAll()
        .then(result => {
          setPlants({ items: result, currentType: 'All' });
        })
    }, [])
  
   
  
    function addPlant(newItem) {
      setPlants(state => {
         return {
          ...state,
          items:[...state.items, newItem]
         };
      })
    };
  
    function updatePlants(item, plantId) {
      setPlants(state => {
        const plant = state.items.find(x => x._id === plantId);
        const updatedItems = state.items.filter(x => x !== plant);
        updatedItems.push(item); 
        return {
          items: updatedItems,
        };
      })
    };
  
    function removePlant(plantId) {
      setPlants(state => {
        const item = state.items.find(x => x._id === plantId)
         return {
         ...state,
         items: state.items.filter(x => x !== item)
         };
      })
    };
    return (

        <DataContext.Provider value={{ plants, addPlant, updatePlants,removePlant }}>
            {children}
        </DataContext.Provider>
    );
}