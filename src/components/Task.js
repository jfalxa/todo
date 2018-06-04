import { h } from 'hyperapp'
import styled, { colors } from '../style'
import TaskInput from './TaskInput'

const Container = styled('div', 'task')(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '6px',

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

const Checkbox = styled('input', 'task-check', { type: 'checkbox' })({
  margin: 0,
  marginTop: '3px',
  marginRight: '9px'
})

const Progress = styled('span', 'task-progress')({
  marginRight: '9px'
})

const FocusContainer = styled('span', 'task-focus')(props => ({
  opacity: props.focused ? 1 : 0,
  marginRight: '9px'
}))

const Focus = ({ focused, onFocus }) => (
  <FocusContainer focused={focused} onclick={onFocus}>
    {focused ? '★' : '☆'}
  </FocusContainer>
)

function onEnter(callback) {
  return e => {
    if (e.key === 'Enter' ) {
      callback()
    }
  }
}

const Task = ({ id, done, focused, disabled, task, progress, sub, onAdd, onCheck, onChange, onFocus }) => (
  <Container done={done} sub={sub}>
    {!sub && <Focus focused={focused} onFocus={onFocus}/>}

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
