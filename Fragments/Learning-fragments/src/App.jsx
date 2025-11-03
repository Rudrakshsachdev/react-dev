import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItemsComponent from "./components/FoodItems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import "./App.css";

function App() {
  const foodItems = [
    "Dal",
    "Rice",
    "Vegetable Curry",
    "Roti",
    "Salad",
    "Buttermilk",
    "Curd",
  ];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItemsComponent items={foodItems} />
    </>
  );
}

export default App;
