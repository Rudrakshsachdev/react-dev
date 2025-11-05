import styles from './FoodInput.module.css';

const FoodInput = ({ handleChange }) => {

    const handleOnChange = (event) => {
        console.log(event.target.value);
        handleChange(event);
    }

  return (
    <input type="text" className={styles['food-input']}
    onKeyDown={handleOnChange}
    placeholder="Add a new food item" />
  );
}

export default FoodInput;