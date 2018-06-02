import { h } from 'hyperapp'
import Task from './Task'
import styled from '../style'

const SubtaskContainer = styled('ul')({
  padding: 0,
  margin: 0,
  marginLeft: '21px'
})

const Subtasks = ({ done, todos, onCheck, onChange }) => (
  <SubtaskContainer>
    {todos.map((subtask, i) => (
      <li key={subtask.id}>
        <Task sub
          task={subtask.task}
          done={done || subtask.done}
          onCheck={!done && (checked => onCheck({ subtask, checked }))}
          onChange={value => onChange({ subtask, value })}
        />
      </li>
    ))}
  </SubtaskContainer>
)

function count(subtasks) {
  const total = subtasks.length
  const done = subtasks.filter(subtask => subtask.done).length

  return `(${done}/${total})`
}

const Todo = ({ todo, onCheck, onChange }) => (
  <li>
    <Task
      task={`${todo.task} ${count(todo.subtasks)}` }
      done={todo.done}
      onCheck={checked => onCheck({ todo, checked })}
      onChange={value => onChange({ todo, value })}
    />

    {(todo.subtasks && todo.subtasks.length > 0) && (
      <Subtasks
        done={todo.done}
        todos={todo.subtasks}
        onCheck={args => onCheck({ todo, ...args })}
        onChange={args => onChange({ todo, ...args })}
      />
    )}
  </li>
)

export default Todo
