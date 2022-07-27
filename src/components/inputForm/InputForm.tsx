import { FormEvent } from "react";
import { useStore } from "../../stores";
import styles from "./InputForm.module.css";

const InputForm = () => {
  const { todos } = useStore();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const value = String(formData.get("todo-input"));

    todos.addTodo(value);
    formElement.reset();
  };
  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input name='todo-input' className={styles["form__input"]} required />
      <button type='submit' className={styles["form__button"]}>
        Add
      </button>
    </form>
  );
};

export default InputForm;
