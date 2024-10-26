import styles from './TodoList.module.css'

import Todo from './Todo'

const TodoList = ({todos, deleteTodo, comletedTodo}) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} comletedTodo={comletedTodo}/>;
      })}
    </div>
  );
};

export default TodoList;
