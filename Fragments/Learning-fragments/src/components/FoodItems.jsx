import Items from "./Items";

function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Items
            FoodItems={item}
            key={index}
            HandleByButton={(event) => console.log(`You clicked on ${item}`)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
