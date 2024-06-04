import axios from "axios";
import { useState, useEffect } from "react";
import { useCategory } from "../../context";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();
  console.log(hotelCategory);

  const handleshowmorrightclick = () => {
    setNumberOfCategoryToShow((prev) => prev + 6);
  };

  const handleshowmorleftclick = () => {
    setNumberOfCategoryToShow((prev) => prev - 6);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3500/api/categories"
        );
        const categoriestoshow = data.slice(
          numberOfCategoryToShow + 6 > data.length
            ? data.length - 6
            : numberOfCategoryToShow,
          numberOfCategoryToShow > data.length
            ? data.length
            : numberOfCategoryToShow + 6
        );
        setCategories(categoriestoshow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberOfCategoryToShow]);

  const handlecategoryclick = (category) => {
    console.log("category " + category);
    setHotelCategory(category);
  };
  console.log(hotelCategory);

  return (
    <>
      <div className="categories">
        {numberOfCategoryToShow >= 6 && (
          <button
            onClick={handleshowmorleftclick}
            className="button btn-category  btn-left fixed cursor-pointer"
          >
            <span className="material-icons-outlined">chevron_left</span>
          </button>
        )}

        {categories &&
          categories.map(({ _id, category }) => (
            <span
              className={`${category === hotelCategory ? "border-bottom" : ""}`}
              onClick={() => handlecategoryclick(category)}
              key={_id}
            >
              {category}
            </span>
          ))}

        {numberOfCategoryToShow - 6 < categories.length && (
          <button
            onClick={handleshowmorrightclick}
            className="button btn-category btn-right fixed cursor-pointer"
          >
            <span className="material-icons-outlined">chevron_right</span>
          </button>
        )}
      </div>
    </>
  );
};
