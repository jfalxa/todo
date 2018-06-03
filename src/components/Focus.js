import { h } from 'hyperapp'
import styled from '../style'
import connect from '../utils/connect'
import { TodoList } from './TodoList'
import { Text, Title } from './Text'
import Page from './Page'


const Focus = ({ lists, onAdd, onCheck, onChange, onFocus }) => (
  <Page>
    {(lists.length === 0) && <Text>No focused task yet!</Text>}

    {lists.map((list, i) => (
      <TodoList
        key={i}
        list={list}
        onAdd={args => onAdd({ ...args, list })}
        onCheck={args => onCheck({ ...args, list })}
        onChange={args => onChange({ ...args, list })}
        onFocus={args => onFocus({ ...args, list })}
      />
    ))}
  </Page>
)


function selector(state, actions, props) {
  const lists = state.todo.lists
    .map(list => ({ ...list, todos: list.todos.filter(todo => todo.focused) }))
    .filter(list => (list.todos.length > 0))

  const onAdd = actions.todo.addTask
  const onCheck = actions.todo.checkTask
  const onChange = actions.todo.changeTask
  const onFocus = actions.todo.focusTask

  return { lists, onAdd, onCheck, onChange, onFocus }
}

export default connect(selector)(Focus)
