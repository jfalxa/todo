import { h } from 'hyperapp'
import { Switch, Route } from '@hyperapp/router'

import Root from './Root'
import Menu from './Menu'
import Focus from './Focus'
import TodoList from './TodoList'
import styled from '../style'


const App = () => (
  <Root>
    <Menu />

    <Switch>
      <Route path="/" render={Focus} />
      <Route path="/lists/:list" render={TodoList} />
    </Switch>
  </Root>
)


export default App
