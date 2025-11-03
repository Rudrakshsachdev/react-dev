import styles from './FoodInput.module.css';

const FoodInput = () => {

    const handleOnChange = (event) => {
        console.log(event.target.value);
    }

  return (
    <input type="text" className={styles['food-input']}
    onChange={handleOnChange}
    placeholder="Add a new food item" />
  );
}

export default FoodInput;