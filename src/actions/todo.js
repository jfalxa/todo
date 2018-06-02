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

export function addTodo({ list, todo }) {
  return state => update(state, { list, todo }, {
    todos: { $push: [Task.create(todo)] }
  })
}

export function addSubtask({ list, todo, subtask }) {
  return state => update(state, { list, todo }, {
    subtasks: { $push: [Task.create(subtask)] }
  })
}

export function checkTask({ list, todo, subtask, checked }) {
  const command = { done: { $set: checked } }

  if (todo && !subtask) {
    command.subtasks = { $set: checkAll(todo.subtasks, checked) }
  }

  return state => update(state, { list, todo, subtask }, command)
}

export function changeTask({ list, todo, subtask, value }) {
  return state => update(state, { list, todo, subtask }, {
    name: { $set: value }
  })
}

