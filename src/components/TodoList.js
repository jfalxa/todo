import { h } from 'hyperapp'
import Todo from './Todo'

const TodoList = ({ list, onToggle }) => (
  <section>
    <h3>{list.name}</h1>

    <ul>
      {list.todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          onToggle={onToggle}
        />
      ))}
    </ul>
  </section>
)

export default TodoList
