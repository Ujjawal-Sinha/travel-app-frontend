import "./RoomsAndBeds.css";
import { useFilter } from "../../../context";

const numbersOfAmenities = ["Any", "1", "2", "3", "4", "5+"];

export const RoomsAndBeds = () => {
  const { filterDispatch, noOfBedrooms, noOfBeds, noOfBathrooms } = useFilter();
  // console.log({ noOfBedrooms, noOfBeds, noOfBathrooms });
  const handleBedroomsClick = (number) => {
    filterDispatch({ type: "BEDROOMS", payload: number });
  };
  const handleBedsClick = (number) => {
    filterDispatch({ type: "BEDS", payload: number });
  };
  const handleBathroomsClick = (number) => {
    filterDispatch({ type: "BATHROOMS", payload: number });
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Rooms & Beds</span>
      <div className="d-flex align-center gap-large">
        <div className="d-flex direction-column gap">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="d-flex direction-column gap">
          <div>
            {numbersOfAmenities.map((number) => (
              <span
                key={number}
                className={`span-label room-count d-flex align-center justify-center cursor-pointer on-hover ${
                  noOfBedrooms.toString() === number ? "selected" : ""
                }`}
                onClick={() => handleBedroomsClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div>
            {numbersOfAmenities.map((number) => (
              <span
                key={number}
                className={`span-label room-count d-flex align-center justify-center cursor-pointer on-hover ${
                  noOfBeds.toString() === number ? "selected" : ""
                }`}
                onClick={() => handleBedsClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div>
            {numbersOfAmenities.map((number) => (
              <span
                key={number}
                className={`span-label room-count d-flex align-center justify-center cursor-pointer on-hover ${
                  noOfBathrooms.toString() === number ? "selected" : ""
                }`}
                onClick={() => handleBathroomsClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
