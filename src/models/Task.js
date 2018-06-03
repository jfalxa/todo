export default function Task(task, sub) {
  const created = {
    done: false,
    focused: false,
    task: task.trim(),
    createdAt: Date.now()
  }

  return sub ? created : { ...created, subtasks: [] }
}


