import styles from "./Items.module.css"

const Items = (props, HandleByButton) => {
  //console.log(styles);


  return (
    <li className={`list-group-item ${styles['kg-item']}`}> <span className={styles['kg-items']}>{props.FoodItems}</span>
    <button className={styles['button']} onClick={HandleByButton}>
      Bye</button>
    </li> 
  );
};

export default Items;
