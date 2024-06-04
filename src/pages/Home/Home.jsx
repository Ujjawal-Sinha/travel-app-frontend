import { Fragment, useEffect, useState } from "react";
import { Navbar, HotelCard, Categories } from "../../components";
import axios from "axios";
import "./Home.css";
import { useCategory } from "../../context";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  console.log("home hotel category " + hotelCategory);

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

  return (
    <Fragment>
      <Navbar />
      <Categories />
      <main className="main d-flex align-cneter wrap gap-larger">
        {hotels &&
          hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
        {/* <HotelCard /> */}
      </main>
    </Fragment>
  );
};
