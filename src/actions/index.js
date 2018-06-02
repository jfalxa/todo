import { location } from '@hyperapp/router'
import * as todo from './todo'

export default {
  todo,
  location: location.actions
}
