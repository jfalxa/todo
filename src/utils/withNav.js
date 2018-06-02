import { h } from 'hyperapp'

export default function withNav(Component) {
  return (props, children) => state => (
    <Component
      active={props.to === state.location.pathname}
      {...props}
    >
      {children}
    </Component>
  )
}
