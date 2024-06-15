import "./HotelImages.css";

export const HotelImages = ({ singleHotel } = {}) => {
  if (!singleHotel) {
    return <div>Loading...</div>;
  }
  const { image, imageArr } = singleHotel;

  return (
    <div className="hotel-image-container d-flex gap-small">
      <div className="primary-image-container">
        <img className="primary-img" src={image} alt="primary-hotel" />
      </div>
      <div className="d-flex wrap gap-small">
        {imageArr &&
          imageArr.map((image, index) => (
            <img
              key={index}
              className="hotel-img"
              src={image}
              alt="secondary-hotel"
            />
          ))}
      </div>
    </div>
  );
};
