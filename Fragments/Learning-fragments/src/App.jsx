import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItemsComponent from "./components/FoodItems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import "./App.css";
import Container from "./components/Components.jsx";
import FoodInput from "./components/FoodInput.jsx";

function App() {
  // const foodItems = [
  //   "Dal",
  //   "Rice",
  //   "Vegetable Curry",
  //   "Roti",
  //   "Salad",
  //   "Buttermilk",
  //   "Curd",
  // ];

  // let textState = useState("Food Items Entered by the user will appear here");
  // let textStateVal = textState[0];
  // let setTextStateVal = textState[1];
  // console.log("Text State Value:", textStateVal);

  let [foodItems, setFoodItems] = useState([]);

  let [textStateVal, setTextStateVal] = useState();
  console.log("Text State Value:", textStateVal);



  const handleChange = (event) => {
    if (event.key === 'Enter') {
      let newFoodItems = event.target.value;


      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);

      console.log("New Food Items:", newFoodItems);
    }
    console.log("Event Target Value:", event);
    setTextStateVal(event.target.value);
  }

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleChange={handleChange} />
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
