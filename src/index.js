import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import update from 'immutability-helper'
import App from './components/App'
import actions from './actions'


const initialState = {
  todo: { lists: [
    { name: 'salut', todos: [
      { done: false, task: 'salut les copains', subtasks: [
        { done: false, task: 'couper du bois' },
        { done: true, task: 'danser la salsa javanaise' }
      ] }
    ] }
  ] },
  location: location.state
}


const main = app(initialState, actions, App, document.body)
const unsubscribe = location.subscribe(main.location)

