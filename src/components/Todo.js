import { h } from 'hyperapp'
import Task from './Task'

const Todo = ({ todo, onCheck, onChange }) => (
  <li>
    <Task
      task={todo.text}
      done={todo.done}
      onCheck={checked => onCheck({ todo, checked })}
      onChange={value => onChange({ todo, value })}
    />

    {(todo.subtasks && todo.subtasks.length > 0) && (
      <ul>
        {todo.subtasks.map((subtask, i) => (
          <li key={subtask.id}>
            <Task sub
              task={subtask.task}
              done={subtask.done}
              onCheck={checked => onCheck({ todo, subtask, checked })}
              onChange={value => onChange({ todo, subtask, value })}
            />
          </li>
        ))}
      </ul>
    )}
  </li>
)

export default Todo
