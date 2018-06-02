import { h } from 'hyperapp'

const noop = () => {}

export default function connect(mapStateToProps = noop, mapActionsToProps = noop) {
  return Component => props => (state, actions) => (
    <Component
      {...props}
      {...mapStateToProps(state, props)}
      {...mapActionsToProps(actions, props)}
    />
  )
}
