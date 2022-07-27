import InputForm from "./components/inputForm/InputForm";
import TodosList from "./components/todosList/TodosList";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <InputForm />
      <TodosList />
    </div>
  );
}

export default App;
