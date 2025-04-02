import React, {useContext} from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItemF/FoodItem";
import { StoreContext } from "../../Context/StoreContext";


const FoodDisplay = ({ category }) => {
  const food_list = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

