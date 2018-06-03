const identity = v => v
const serialize = JSON.stringify.bind(null)
const parse = JSON.parse.bind(null)

export default function persist(app, key, selector) {
  return (initialState, actionDefinitions, originalView, container) => {

    const cachedState = localStorage.getItem(key)

    const state = cachedState
      ? { ...initialState, ...parse(cachedState) }
      : initialState

    const view = (state, actions) => {
      const stateSlice = selector(state)
      localStorage.setItem(key, serialize(stateSlice))

      return originalView(state, actions)
    }

    return app(state, actionDefinitions, view, container)
  }
}


