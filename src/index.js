import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import update from 'immutability-helper'
import App from './components/App'
import persist from './utils/persist'
import actions from './actions'


const initialState = {
  todo: { lists: [] },
  location: location.state
}

const enhancedApp = persist(app, 'l-todos', ({ todo }) => ({ todo }))
const main = enhancedApp(initialState, actions, App, document.body)
const unsubscribe = location.subscribe(main.location)

