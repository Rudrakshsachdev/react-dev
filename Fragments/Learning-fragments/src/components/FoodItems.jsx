import Items from "./Items";


function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Items FoodItems={item} key={index} />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;