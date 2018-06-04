import { h } from 'hyperapp'
import pico from 'picostyle'

const picostyled = pico(h)

export const colors = {
  primary: 'black',
  secondary: 'grey',
  background: 'white'
}

export default function styled(Component, className, attrs) {
  return style => {
    const StyledComponent = picostyled(Component, className)(style)

    return attrs
      ? (props, children) => <StyledComponent {...attrs} {...props}>{children}</StyledComponent>
      : StyledComponent
  }
}

