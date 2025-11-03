import styles from "./Items.module.css"

const Items = (props) => {
  //console.log(styles);
  return (
    <li className={`list-group-item ${styles['kg-item']}`}> <span className={styles['kg-items']}>{props.FoodItems}</span>
    </li> 
  );
};

export default Items;
