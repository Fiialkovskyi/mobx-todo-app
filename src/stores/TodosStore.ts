import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

const TodosStore = () => {
  return makeAutoObservable({
    list: [] as Todo[],
    addTodo(title: string) {
      this.list.push({
        id: uuidv4(),
        title,
        isDone: false,
      });
    },
    toggleIsDone(todo: Todo) {
      todo.isDone = !todo.isDone;
    },
    deleteTodo(todo: Todo) {
      this.list = this.list.filter((item) => item.id !== todo.id);
    },
  });
};

export default TodosStore;
