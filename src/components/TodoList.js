import { h } from 'hyperapp'
import { Redirect } from '@hyperapp/router'
import slug from 'lodash/kebabCase'
import { reverse } from '../utils/helpers'
import connect from '../utils/connect'
import styled from '../style'
import Todo from './Todo'
import TaskInput from './TaskInput'
import { Title } from './Text'
import Page from './Page'

const TodoListContainer = styled('div')({
  marginBottom: '27px'
})

const ListContainer = styled('ul')({
  padding: 0,
  margin: 0
})

const TodoInput = styled(TaskInput)({
  marginBottom: '21px',
  fontSize: '18px'
})

export const TodoList = ({ list, add, onAdd, onCheck, onChange, onFocus }) => (
  <TodoListContainer>
    <Title underline>{list.name}</Title>

    {add && (
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
          onFocus={onFocus}
        />
      ))}
    </ListContainer>
  </TodoListContainer>
)


function selector(state, actions, props) {
  const list = state.todo.lists
    .find(list => props.match.params.list === slug(list.name))

  const onAdd = args => actions.todo.addTask({ list, ...args })
  const onCheck = args => actions.todo.checkTask({ list, ...args })
  const onChange = args => actions.todo.changeTask({ list, ...args })
  const onFocus = args => actions.todo.focusTask({ list, ...args })

  return { add: true, list, onAdd, onCheck, onChange, onFocus }
}

export default connect(selector)(props => (
  props.list
    ? <Page><TodoList {...props} /></Page>
    : <Redirect to="/" />
))

