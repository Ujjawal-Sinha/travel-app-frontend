import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./PriceRange.css";
import { useFilter } from "../../../context";

const minDifference = 500;

function valuetext(value) {
  return `${value}`;
}

export const PriceRange = () => {
  const { PriceRange, filterDispatch } = useFilter();

  // console.log({ PriceRange });

  const hanclePriceChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      filterDispatch({
        type: "MINIMUM_PRICE",
        payload: {
          newValue,
          PriceRange,
          minDifference,
        },
      });
    } else {
      filterDispatch({
        type: "MAXIMUM_PRICE",
        payload: {
          newValue,
          PriceRange,
          minDifference,
        },
      });
    }
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Price Range</span>
      <Box>
        <Slider
          sx={{ color: "#ff6525" }}
          className="price-range"
          getAriaLabel={() => "Minimum Difference"}
          value={PriceRange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          onChange={hanclePriceChange}
          min={100}
          max={25000}
          disableSwap
        />
      </Box>
    </div>
  );
};
