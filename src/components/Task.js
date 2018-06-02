import { h } from 'hyperapp'
import styled, { colors } from '../style'

const Container = styled('div')(props => ({
  flexDirection: 'row',
  alignItems: 'baseline',
  marginBottom: '6px',

  color: props.done ? colors.secondary : colors.primary,
  fontSize: props.sub ? '15px' : '21px',

  input: {
    fontSize: props.sub ? '15px' : '21px',
    color: props.done ? colors.secondary : colors.primary,
    textDecoration: props.done ? 'line-through' : 'none'
  }
}))

const Checkbox = styled('input', { type: 'checkbox' })({
  margin: 0,
  marginRight: '9px'
})

const Progress = styled('span')({
  marginRight: '9px'
})

const TaskInput = styled('input', { type: 'text' })(props => ({
  border: 0,
  outline: 'none',

  ':disabled': {
    background: 'none',
    border: 0
  }
}))

const Task = ({ id, done, disabled, task, progress, sub, onCheck, onChange }) => (
  <Container done={done} sub={sub}>
    <Checkbox
      checked={done}
      disabled={disabled}
      onclick={e => onCheck(e.target.checked)}
    />

    {progress && <Progress>{progress}</Progress>}

    <TaskInput
      value={task}
      disabled={disabled || done}
      onchange={e => onChange(e.target.value)}
    />
  </Container>
)

export default Task
