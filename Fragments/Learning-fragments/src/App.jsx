import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItemsComponent from "./components/FoodItems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import "./App.css";
import Container from "./components/Components.jsx";
import FoodInput from "./components/FoodInput.jsx";

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
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput />
      <ErrorMessage items={foodItems} />
      <FoodItemsComponent items={foodItems} />
    </Container>

    {/* /*<Container>
      <p>Enjoy a variety of healthy dishes!</p>
    </Container> */}


    </>
  );
}

export default App;
