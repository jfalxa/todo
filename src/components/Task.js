import { h } from 'hyperapp'
import styled, { colors } from '../style'

const Container = styled('div')(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  color: props.done ? colors.secondary : colors.primary,
  fontSize: props.sub ? '12px' : '16px',
  textDecoration: props.done ? 'line-through' : 'none'
}))

function onClick(onCheck) {
  return e => {
    if (!onCheck) {
      return e.preventDefault()
    }

    return onCheck(e.target.checked)
  }
}

const Task = ({ id, done, task, sub, onCheck }) => (
  <Container done={done} sub={sub}>
    <input
      type="checkbox"
      checked={done}
      onclick={onClick(onCheck)}
    />
    <label>
      {task}
    </label>
  </Container>
)

export default Task
