export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_FILTER_MODAL":
      return {
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen,
      };
    case "MINIMUM_PRICE":
      return {
        ...state,
        PriceRange: [
          Math.min(
            payload.newValue[0],
            payload.PriceRange[1] - payload.minDifference
          ),
          payload.PriceRange[1],
        ],
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        PriceRange: [
          payload.PriceRange[0],
          Math.max(
            payload.newValue[1],
            payload.PriceRange[0] + payload.minDifference
          ),
        ],
      };
    case "BEDROOMS":
      return {
        ...state,
        noOfBedrooms:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };
    case "BEDS":
      return {
        ...state,
        noOfBeds:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };
    case "BATHROOMS":
      return {
        ...state,
        noOfBathrooms:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };

    case "PROPERTY_TYPE":
      return {
        ...state,
        propertyType: payload,
      };

    case "RATING":
      return {
        ...state,
        hotelRating: Number(payload),
      };

    case "CANCELABLE":
      return {
        ...state,
        isCancelable: payload,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        PriceRange: [300, 20000],
        noOfBedrooms: "Any",
        noOfBeds: "Any",
        noOfBathrooms: "Any",
        propertyType: "Any",
        hotelRating: 0,
        isCancelable: true,
      };

    default:
      return state;
  }
};
