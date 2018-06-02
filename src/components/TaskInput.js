import { h } from 'hyperapp'
import styled from '../style'

const TaskInput = styled('input', {
  type: 'text',
  oncreate: el => !el.value && el.focus(),
  onupdate: (el, old) => !el.value && el.value !== old.value && el.focus()
})(props => ({
  border: 0,
  background: 'none',
  outline: 'none',

  ':disabled': {
    background: 'none',
    border: 0
  }
}))

export default TaskInput
