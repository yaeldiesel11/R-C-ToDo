import logo from './logo.svg';
import './App.css';
import TodoList from "../TodoList/TodoList";
const App = () => {
  return (
    <div className="App">
      <h1> To-Do List </h1>
      <TodoList />
    </div>
  );
}

export default App;
