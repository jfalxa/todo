import { h } from 'hyperapp'
import styled, { colors } from '../style'
import TaskInput from './TaskInput'

const Container = styled('div')(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: props.sub ? '6px' : null,

  color: props.done ? colors.secondary : colors.primary,
  fontSize: '18px',

  input: {
    fontSize: props.sub ? '15px' : '21px',
    fontWeight: props.sub ? 'normal' : 'bold',
    color: props.done ? colors.secondary : colors.primary,
    textDecoration: props.done ? 'line-through' : 'none'
  }
}))

const Checkbox = styled('input', { type: 'checkbox' })({
  margin: 0,
  marginTop: '3px',
  marginRight: '9px'
})

const Progress = styled('span')({
  marginRight: '9px'
})

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
