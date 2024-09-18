
import { createContext, useState, useContext } from "react";


const FilterContext = createContext();


export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    genres: [],
    platforms: [],
    priceRange: [0, Infinity],
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}


export function useFilter() {
  return useContext(FilterContext);
}
