 import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

 export default function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}


