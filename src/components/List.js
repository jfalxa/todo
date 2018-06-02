import { h } from 'hyperapp'
import connect from '../utils/connect'


const List = () => (
  <div>List</div>
)


const select = (state, props) => state.lists.find(list => list.name === props.match.params.list)


export default connect()(List)
