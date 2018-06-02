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


export const TodoList = ({ list, onCheck, onCheckSubtask, onChange, onChangeSubtask }) => (
  <TodoListContainer>
    <Title>{list.name}</Title>

    <ListContainer>
      {list.todos.map((todo, i) => (
        <Todo
          key={i}
          todo={todo}
          onCheck={onCheck}
          onCheckSubtask={onCheckSubtask}
          onChange={onChange}
          onChangeSubtask={onChangeSubtask}
        />
      ))}
    </ListContainer>
  </TodoListContainer>
)

function selector(state, actions, props) {
  const list = state.todo.lists.find(list => list.name === props.match.params.list)

  const onCheck = args => actions.todo.checkTodo({ list, ...args })
  const onCheckSubtask = args => actions.todo.checkSubtask({ list, ...args })
  const onChange = args => actions.todo.changeTodo({ list, ...args })
  const onChangeSubtask = args => actions.todo.changeSubtask({ list, ...args })

  return { list, onCheck, onCheckSubtask, onChange, onChangeSubtask }
}

export default connect(selector)(props => (
  props.list
    ? <TodoList {...props} />
    : <Redirect to="/" />
))

