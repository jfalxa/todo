import { h } from 'hyperapp'
import styled from '../style'

const TaskInput = styled('input', { type: 'text' })(props => ({
  border: 0,
  background: 'none',
  outline: 'none',

  ':disabled': {
    background: 'none',
    border: 0
  }
}))

export default TaskInput
