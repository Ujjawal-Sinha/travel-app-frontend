import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const initialvalue = {
  isFilterModalOpen: false,
  PriceRange: [300, 20000],
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  noOfBathrooms: "Any",
  propertyType: "Any",
  hotelRating: 0,
  isCancelable: true,
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [
    {
      isFilterModalOpen,
      PriceRange,
      noOfBedrooms,
      noOfBeds,
      noOfBathrooms,
      propertyType,
      hotelRating,
      isCancelable,
    },
    filterDispatch,
  ] = useReducer(filterReducer, initialvalue);
  return (
    <FilterContext.Provider
      value={{
        isFilterModalOpen,
        PriceRange,
        noOfBedrooms,
        noOfBeds,
        noOfBathrooms,
        propertyType,
        hotelRating,
        isCancelable,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilter };
