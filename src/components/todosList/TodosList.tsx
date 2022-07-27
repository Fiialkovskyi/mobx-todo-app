import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { Todo } from "../../stores/TodosStore";
import styles from "./TodosList.module.css";

const TodosList = () => {
  const { todos } = useStore();
  const handleSelect = (todo: Todo): void => {
    todos.toggleIsDone(todo);
  };

  const handleDelete = (todo: Todo): void => {
    todos.deleteTodo(todo);
  };
  return (
    <ul className={styles.list}>
      {todos.list.map((todo) => {
        return (
          <li key={todo.id} className={styles["list__item"]}>
            <input
              type='checkbox'
              checked={todo.isDone}
              id={todo.id}
              onChange={(e) => handleSelect(todo)}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(TodosList);
