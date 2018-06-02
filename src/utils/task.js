export function create(task, sub) {
  const created = {
    done: false,
    task: task.trim(),
    createdAt: Date.now()
  }

  return sub ? created : { ...created, subtasks: [] }
}
