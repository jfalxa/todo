import { h } from 'hyperapp'
import styled from '../style'


const Root = styled('div', 'root')({

  flexDirection: 'row',
  height: '100%',
  userSelect: 'none',

  'null, html, body': {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  },

  'null, body *': {
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    flexShrink: 0,
    fontFamily: 'serif'
  }

})


export default Root
