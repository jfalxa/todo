import { h } from 'hyperapp'
import Task from './Task'
import styled from '../style'
import { reverse } from '../utils/helpers'

const Container = styled('li', 'todo')({
  marginBottom: '12px',

  ':hover .task-focus': {
    opacity: 1
  }
})

const SubtaskContainer = styled('ul', 'todo-subtasks')({
  padding: 0,
  margin: 0,
  marginLeft: '48px',
})

const Subtasks = ({ done, todos, onAdd, onCheck, onChange }) => (
  <SubtaskContainer>
    {todos.map((subtask, i) => (
      <li key={i}>
        <Task sub
          task={subtask.task}
          done={subtask.done}
          disabled={done}
          onAdd={() => onAdd({ subtask: '' })}
          onCheck={checked => onCheck({ subtask, checked })}
          onChange={value => onChange({ subtask, value })}
        />
      </li>
    ))}
  </SubtaskContainer>
)

function count(subtasks) {
  const total = subtasks.length
  const done = subtasks.filter(subtask => subtask.done).length

  return (total > 0)
    ? `(${done}/${total})`
    : null
}

const Todo = ({ todo, onAdd, onCheck, onChange, onFocus }) => (
  <Container>
    <Task
      task={todo.task}
      done={todo.done}
      focused={todo.focused}
      progress={count(todo.subtasks)}
      onAdd={() => onAdd({ todo, subtask: '' })}
      onCheck={checked => onCheck({ todo, checked })}
      onChange={value => onChange({ todo, value })}
      onFocus={() => onFocus({ todo })}
    />

    {(todo.subtasks && todo.subtasks.length > 0) && (
      <Subtasks
        done={todo.done}
        todos={todo.subtasks}
        onAdd={args => onAdd({ todo, ...args })}
        onCheck={args => onCheck({ todo, ...args })}
        onChange={args => onChange({ todo, ...args })}
      />
    )}
  </Container>
)

export default Todo
