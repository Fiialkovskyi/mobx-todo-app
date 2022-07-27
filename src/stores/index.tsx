import { createContext, useContext } from "react";
import TodosStore from "./TodosStore";

const store = {
  todos: TodosStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export default store;
