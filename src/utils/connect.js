import { h } from 'hyperapp'

const noop = () => {}

export default function connect(mapStateAndActionsToProps = noop, mapActionsToProps = noop) {
  return Component => props => (state, actions) => (
    <Component
      {...props}
      {...mapStateAndActionsToProps(state, actions, props)}
    />
  )
}
