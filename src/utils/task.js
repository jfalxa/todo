let uid = 0

export function create(task, sub) {
  const created = { ...task, done: false, id: uid++ }
  return sub ? created : { ...created, subtasks: [] }
}
