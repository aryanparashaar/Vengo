import React from "react";
import "./ExploreMenu.css"; // Importing the associated CSS file
import { menu_list } from "../../assets/assets"; // Importing the menu list from assets

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      {/* Section Heading */}
      <h1>Explore Our Menu</h1>

      {/* Menu Description */}
      <p className="explore-menu-text">
        Discover a variety of delicious meals, carefully crafted with fresh
        ingredients to satisfy your cravings. Choose from our diverse menu and
        indulge in a delightful experience!
      </p>

      {/* Displaying the Menu Items */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      {/* Horizontal Divider Line */}
      <hr />
    </div>
  );
};

export default ExploreMenu;

