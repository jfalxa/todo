import { h } from 'hyperapp'
import { Switch, Route } from '@hyperapp/router'

import Root from './Root'
import Menu from './Menu'
import Focus from './Focus'
import TodoList from './TodoList'
import styled from '../style'


const App = (state, actions) => (
  <Root>
    <Menu
      lists={state.todo.lists}
      onList={actions.todo.createList}
    />

    <Switch>
      <Route path="/" render={Focus} />
      <Route path="/:list" render={TodoList} />
    </Switch>
  </Root>
)


export default App
