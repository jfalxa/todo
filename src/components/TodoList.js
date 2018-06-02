import { h } from 'hyperapp'
import { Redirect } from '@hyperapp/router'
import connect from '../utils/connect'
import styled from '../style'
import Todo from './Todo'
import { Title } from './Text'

const TodoListContainer = styled('section')({
  padding: '0 9px'
})

const ListContainer = styled('ul')({
  padding: 0,
  margin: 0
})

export const TodoList = ({ list, onCheck, onChange }) => (
  <TodoListContainer>
    <Title>{list.name}</Title>

    <ListContainer>
      {list.todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          onCheck={onCheck}
          onChange={onChange}
        />
      ))}
    </ListContainer>
  </TodoListContainer>
)

function selector(state, actions, props) {
  const list = state.todo.lists.find(list => list.name === props.match.params.list)

  const onCheck = args => actions.todo.checkTask({ list, ...args })
  const onChange = args => actions.todo.changeTask({ list, ...args })

  return { list, onCheck, onChange }
}

export default connect(selector)(props => (
  props.list
    ? <TodoList {...props} />
    : <Redirect to="/" />
))

