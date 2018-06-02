import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import update from 'immutability-helper'
import App from './components/App'
import actions from './actions'


const initialState = {
  todo: { lists: [] },
  location: location.state
}


const main = app(initialState, actions, App, document.body)
const unsubscribe = location.subscribe(main.location)

