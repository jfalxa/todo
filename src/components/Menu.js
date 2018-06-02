import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import styled from '../style'


const Container = styled('div')({
  flexDirection: 'column'
})


const Menu = ({ lists }) => (
  <div>
    <span>Focus</span>
    <Link to="/">Focus</Link>

    <span>Lists</span>
    <Link to="/list/salut">Salut</Link>
  </div>
)


export default Menu
