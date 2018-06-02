import { h } from 'hyperapp'
import { Switch, Route } from '@hyperapp/router'

import Root from './Root'
import Menu from './Menu'
import Focus from './Focus'
import List from './List'
import styled from '../utils/styled'


const App = () => (
  <Root>
    <Menu />

    <Switch>
      <Route path="/" render={Focus} />
      <Route path="/list/:list" render={List} />
    </Switch>
  </Root>
)


export default App
