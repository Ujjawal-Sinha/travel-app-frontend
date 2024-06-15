import { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  HotelCard,
  Categories,
  SearchStayWithDate,
} from "../../components";
import "./Home.css";
import { useCategory, useDate } from "../../context";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  // console.log(isSeachModalOpen);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [hotelCategory]);
  // console.log(hotelCategory);
  // console.log(isSeachModalOpen);

  return (
    <div className="relative">
      <Navbar />
      <Categories />
      <main className="main d-flex align-center wrap gap-larger">
        {hotels &&
          hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </main>
      {isSearchModalOpen && <SearchStayWithDate />}
    </div>
  );
};
