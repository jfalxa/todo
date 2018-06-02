import { h } from 'hyperapp'
import Task from './Task'
import styled from '../style'
import { reverse } from '../utils/helpers'

const Container = styled('li')({
  marginBottom: '12px',

  ':focus': {
    background: 'red'
  }
})

const SubtaskContainer = styled('ul')({
  padding: 0,
  margin: 0,
  marginLeft: '21px',
})

const Subtasks = ({ done, todos, onCheck, onChange }) => (
  <SubtaskContainer>
    {todos.map((subtask, i) => (
      <li key={subtask.id}>
        <Task sub
          task={subtask.task}
          done={subtask.done}
          disabled={done}
          onCheck={checked => onCheck({ subtask, checked })}
          onChange={value => onChange({ subtask, value })}
        />
      </li>
    ))}
  </SubtaskContainer>
)

const TaskInput = styled('input', { type: 'text' })(props => ({
  border: 0,
  outline: 'none',

  ':disabled': {
    background: 'none',
    border: 0
  }
}))

function count(subtasks) {
  const total = subtasks.length
  const done = subtasks.filter(subtask => subtask.done).length

  return (total > 0)
    ? `(${done}/${total})`
    : null
}

const Todo = ({ todo, onAdd, onCheck, onChange }) => (
  <Container>
    <Task
      task={todo.task}
      done={todo.done}
      progress={count(todo.subtasks)}
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

    <TaskInput
      value=""
      placeholder="+"
      style={{ marginLeft: '21px' }}
      onchange={e => onAdd({ todo, subtask: { task: e.target.value } })}
    />
  </Container>
)

export default Todo
