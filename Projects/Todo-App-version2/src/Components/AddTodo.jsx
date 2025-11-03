import styles from "./AddTodo.module.css";


function AddTodo() {
  return (
    <div className="container text-center">
      <div className={`row ${styles['kg-row']}`}>
        <div className="col-6">
          <input type="text" placeholder="Add your todo here" className={styles['input']} />
        </div>
        <div className="col-4">
          <input type="date" placeholder="Add date here" className={styles['input']} />
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-success ${styles['kg-btn']}`}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
