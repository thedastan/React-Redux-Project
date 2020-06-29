import React from 'react'
import { Provider } from 'react-redux'
import Users from './users'
import store from './redux'

const Root = () => {
  return (
    <div>
      <Provider store={store}>
        <Users />
      </Provider>
    </div>
  )
}

export default Root
