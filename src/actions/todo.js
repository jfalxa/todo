import set from 'lodash/set'
import immutableUpdate from 'immutability-helper'
import * as Task from '../utils/task'

function update(state, { list, todo, subtask }, command) {
  const listIndex = list ? state.lists.indexOf(list) : -1
  const todoIndex = todo ? state.lists[listIndex].todos.indexOf(todo) : -1
  const subtaskIndex = subtask ? state.lists[listIndex].todos[todoIndex].subtasks.indexOf(subtask) : -1

  const patch = subtaskIndex > -1
    ? set({}, `lists[${listIndex}].todos[${todoIndex}].subtasks[${subtaskIndex}]`, command)
    : (todoIndex > -1)
      ? set({}, `lists[${listIndex}].todos[${todoIndex}]`, command)
      : (listIndex > -1)
        ? set({}, `lists[${listIndex}]`, command)
        : null

  return immutableUpdate(state, patch)
}

function checkAll(tasks, checked) {
  return tasks.map(task => ({ ...task, done: checked }))
}


export function createList({ list }) {
  return state => immutableUpdate(state, {
    lists: { $push: [list] }
  })
}

export function addTask({ list, todo, subtask }) {
  const args = Boolean(subtask)
    ? [{ list, todo }, { subtasks: { $push: [Task.create(subtask)] } }]
    : [{ list }, { todos: { $push: [Task.create(todo)] } }]

  return state => update(state, ...args)
}

export function removeTask({ list, todo, subtask }) {
  const args = Boolean(subtask)
    ? [{ list, todo }, { subtasks: { $splice: [[todo.subtasks.indexOf(subtask), 1]] } }]
    : [{ list }, { todos: { $splice: [[list.todos.indexOf(todo), 1]] } }]

  return state => update(state, ...args)
}

export function checkTask({ list, todo, subtask, checked }) {
  const command = { done: { $set: checked } }

  if (todo && !subtask) {
    command.subtasks = { $set: checkAll(todo.subtasks, checked) }
  }

  return state => update(state, { list, todo, subtask }, command)
}

export function changeTask({ list, todo, subtask, value }) {
  return (value.length > 0)
    ? state => update(state, { list, todo, subtask }, {})
    : removeTask({ list, todo, subtask })
}

