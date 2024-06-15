import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  Navbar,
  HotelImages,
  HotelDetails,
  FinalPrice,
} from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { hotelId } = useParams();
  const [singleHotel, setSingleHotel] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels/${hotelId}`
        );
        setSingleHotel(data);

        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [hotelId]);

  let hotelname = "";
  let countryname = "";

  if (singleHotel) {
    const { name, country } = singleHotel;
    hotelname = name;
    countryname = country;
  }

  return (
    <Fragment>
      <Navbar />
      <main className="single-hotel-page">
        <span className="hotel-name-add">
          {hotelname}, {countryname}
        </span>
        <HotelImages singleHotel={singleHotel}></HotelImages>
      </main>
      <div className="booking-details">
        <div className="hotel-details">
          <HotelDetails singleHotel={singleHotel} />
        </div>
        <div className="hotel-price">
          <FinalPrice singleHotel={singleHotel} />
        </div>
      </div>
    </Fragment>
  );
};
