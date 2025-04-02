import React from "react";
import "./Home.css";
import Header from "../../Components/HeaderF/Header";
import ExploreMenu from "../../Components/ExploreMenuF/ExploreMenu";
import { useState } from "react";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;

