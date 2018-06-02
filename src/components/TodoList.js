import { h } from 'hyperapp'
import { Redirect } from '@hyperapp/router'
import { reverse } from '../utils/helpers'
import connect from '../utils/connect'
import styled from '../style'
import Todo from './Todo'
import TaskInput from './TaskInput'
import { Title } from './Text'

const TodoListContainer = styled('div')({
  flex: 1,
  padding: '9px',
  overflowY: 'scroll'
})

const ListContainer = styled('ul')({
  padding: 0,
  margin: 0
})

const TodoInput = styled(TaskInput)({
  marginBottom: '21px',
  fontSize: '18px'
})

export const TodoList = ({ list, onAdd, onCheck, onChange }) => (
  <TodoListContainer>
    <Title underline>{list.name}</Title>

    {onAdd && (
      <TodoInput
        value=""
        placeholder="+ Add a new task"
        onchange={e => onAdd({ todo: e.target.value })}
      />
    )}

    <ListContainer>
      {reverse(list.todos).map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          onAdd={onAdd}
          onCheck={onCheck}
          onChange={onChange}
        />
      ))}
    </ListContainer>
  </TodoListContainer>
)

function selector(state, actions, props) {
  const list = state.todo.lists.find(list => list.name === props.match.params.list)

  const onAdd = args => actions.todo.addTask({ list, ...args })
  const onCheck = args => actions.todo.checkTask({ list, ...args })
  const onChange = args => actions.todo.changeTask({ list, ...args })

  return { list, onAdd, onCheck, onChange }
}

export default connect(selector)(props => (
  props.list
    ? <TodoList {...props} />
    : <Redirect to="/" />
))

