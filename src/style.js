import { h } from 'hyperapp'
import pico from 'picostyle'

const picostyled = pico(h)

export const colors = {
  primary: 'black',
  secondary: 'grey',
  background: 'white'
}

export default function styled(Component, attrs) {
  return style => {
    const StyledComponent = picostyled(Component)(style)

    return attrs
      ? props => <StyledComponent {...attrs} {...props} />
      : StyledComponent
  }
}

