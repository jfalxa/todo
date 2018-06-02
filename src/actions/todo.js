import update from 'immutability-helper'
import * as Task from '../utils/task'

export function createList({ list }) {
  return state => update(state, {
    lists: { $push: [list] }
  })
}

export function addTodo({ list, todo }) {
  return state => {
    const listIndex = state.lists.findIndex(list)

    return update(state, {
      lists: {
        [listIndex]: {
          todos: { $push: [Task.create(todo)] }
        }
      }
    })
  }
}

export function addSubtask({ list, todo, subtask }) {
  return state => {
    const listIndex = state.lists.findIndex(list)
    const todoIndex = state.lists[listIndex].findIndex(todo)

    return update(state, {
      lists: {
        [listIndex]: {
          todos: {
            [todoIndex]: {
              subtasks: { $push: [Task.create(subtask)] }
            }
          }
        }
      }
    })
  }
}

