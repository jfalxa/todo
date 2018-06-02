import { h } from 'hyperapp'
import styled, { colors } from '../style'
import TaskInput from './TaskInput'

const Container = styled('div')(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: props.sub ? '6px' : null,

  color: props.done ? colors.secondary : colors.primary,
  fontSize: '15px',

  'input[type=text]': {
    flex: 1,
    fontSize: props.sub ? '15px' : '18px',
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

function onEnter(callback) {
  return e => {
    if (e.key === 'Enter' ) {
      callback()
    }
  }
}

const Task = ({ id, done, disabled, task, progress, sub, onAdd, onCheck, onChange }) => (
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
      onblur={e => onChange(e.target.value)}
      onkeyup={onEnter(onAdd)}
    />
  </Container>
)

export default Task
