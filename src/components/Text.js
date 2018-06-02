import { h } from 'hyperapp'
import styled from '../style'


export const Title = styled('h1')(props => ({
  marginTop: 0,
  marginBottom: '21px',
  paddingLeft: props.underline ? '6px' : null,
  borderBottom: props.underline ? '1px solid' : null,
  textTransform: 'capitalize'
}))
