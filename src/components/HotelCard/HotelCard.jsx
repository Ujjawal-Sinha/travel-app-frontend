import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
import { useWishlist, useAuth } from "../../context";
import { findHotelInWishlist } from "../../utils";

export const HotelCard = ({ hotel = {} }) => {
  const { _id, name, image, address, state, rating, price } = hotel;

  const { wishlist, wishlistDispatch } = useWishlist();
  const { accessToken, authDispatch } = useAuth();

  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);
  console.log({ wishlist });

  const navigate = useNavigate();

  const handleHotelCardClick = () => {
    navigate(`/hotels/${name}/${state}/${_id}/reserve`);
  };

  const handleWishlistClick = (e) => {
    if (accessToken) {
      e.stopPropagation();
      if (!isHotelInWishlist) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: hotel });
        navigate("/wishlist");
      } else {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
      }
    } else {
      authDispatch({ type: "SHOW_AUTH_MODAL" });
    }
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <img
        onClick={handleHotelCardClick}
        className="img"
        src={image}
        alt={name}
      />
      <div onClick={handleHotelCardClick} className="hotelcard-details">
        <div className="d-flex align-center">
          <span className="location">
            {address}, {state}
          </span>
          <span className="rating d-flex align-center">
            <span className="material-icons-outlined">star</span>
            <span>{rating}</span>
          </span>
        </div>
        <p className="hotel-name">{name}</p>
        <p className="price-details d-flex align-center">
          <span className="price">Rs. {price}</span>
          <span>night</span>
        </p>
      </div>
      <button
        className="button btn-wishlist absolute d-flex align-center"
        onClick={handleWishlistClick}
      >
        <span
          className={`material-icons favorite cursor ${
            isHotelInWishlist ? "fav-selected" : ""
          }`}
        >
          favorite
        </span>
      </button>
    </div>
  );
};
