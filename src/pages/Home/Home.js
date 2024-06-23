import { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  HotelCard,
  Categories,
  SearchStayWithDate,
  Filter,
} from "../../components";
import "./Home.css";
import { useCategory, useDate, useFilter } from "../../context";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const {
    isFilterModalOpen,
    PriceRange,
    noOfBedrooms,
    noOfBeds,
    noOfBathrooms,
    propertyType,
    hotelRating,
    isCancelable,
  } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [hotelCategory]);

  // Add a check to ensure PriceRange is defined and has at least two elements
  const filteredHotelByPrice =
    PriceRange && PriceRange.length === 2
      ? hotels.filter(
          (hotel) =>
            hotel.price >= PriceRange[0] && hotel.price <= PriceRange[1]
        )
      : hotels;

  const filteredHotelByBedrooms =
    noOfBedrooms === "Any"
      ? filteredHotelByPrice
      : filteredHotelByPrice.filter(
          (hotel) => hotel.numberOfBedrooms >= Number(noOfBedrooms)
        );

  const filteredHotelByBeds =
    noOfBeds === "Any"
      ? filteredHotelByBedrooms
      : filteredHotelByBedrooms.filter(
          (hotel) => hotel.numberOfBeds >= Number(noOfBeds)
        );

  const filteredHotelByBathrooms =
    noOfBathrooms === "Any"
      ? filteredHotelByBeds
      : filteredHotelByBeds.filter(
          (hotel) => hotel.numberOfBathrooms >= Number(noOfBathrooms)
        );

  const filteredHotelByPropertyType =
    propertyType === "Any"
      ? filteredHotelByBathrooms
      : filteredHotelByBathrooms.filter(
          (hotel) => hotel.propertyType === propertyType
        );

  const filteredHotelByRating = filteredHotelByPropertyType.filter(
    (hotel) => hotel.rating >= hotelRating
  );

  const filteredHotelByCancelable = filteredHotelByRating.filter(
    (hotel) => hotel.isCancelable === isCancelable
  );

  // console.log({ PriceRange });

  return (
    <div className="relative">
      <Navbar />
      <Categories />
      <main className="main d-flex align-center wrap gap-larger">
        {filteredHotelByCancelable &&
          filteredHotelByCancelable.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
      </main>
      {isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
    </div>
  );
};
