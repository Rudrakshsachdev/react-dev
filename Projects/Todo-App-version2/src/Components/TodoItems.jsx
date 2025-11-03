import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems = [] }) => {
  return (
    <>
      <div className={styles['items-container']}>
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
