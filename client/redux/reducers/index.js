import { combineReducers } from 'redux'
import users from './users'

const rootReducer = () => {
  return combineReducers({
    myUsers: users
  })
}

export default rootReducer
