import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import styled from '../style'
import withNav from '../utils/withNav'
import { Title } from './Text'

const ItemContainer = styled('li')({
  marginBottom: '18px',
  fontSize: '18px',
  fontWeight: 'bold'
})

const ItemLabel = withNav(styled(Link)(props => ({
  height: props.sub ? '27px' : '32px',
  paddingLeft: props.sub ? '18px' : '9px',
  paddingRight: '9px',
  lineHeight: props.sub ? '27px' : '32px',
  textDecoration: 'none',
  background: props.active ? '#DDD' : null,

  ':hover': {
    background: props.to ? '#EEE' : null
  }
})))

const ItemList = styled('ul')(props => ({
  padding: 0,
  margin: 0
}))

const Item = ({ to, label, sub, class:cs }, children) => (
  <ItemContainer class={cs}>
    <ItemLabel to={to} sub={sub}>{label}</ItemLabel>
    {children && children.length > 0 && (
      <ItemList pad>{children}</ItemList>
    )}
  </ItemContainer>
)

const SubItem = styled(Item, { sub: true })({
  marginBottom: 0,
  fontSize: '15px',
  fontWeight: 'normal'
})

const MenuContainer = styled('div')({
  width: '180px',
  marginTop: '9px',
  borderRight: '1px solid #EEE'
})

const AppTitle = styled(Title)({
  marginLeft: '9px'
})

const Menu = ({ lists }) => (
  <MenuContainer>
    <AppTitle>[L]</AppTitle>
    <ItemList>
      <Item to="/" label="Focus"/>
      <Item label="Lists">
        <SubItem to="/salut" label="Salut" />
        <SubItem to="/voila" label="Voila." />
        <SubItem to="/muy" label="Muuuuuuuy" />
        <SubItem to="/allez" label="Allez, allez" />
      </Item>
    </ItemList>
  </MenuContainer>
)

export default Menu
