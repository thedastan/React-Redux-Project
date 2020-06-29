import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaceUser } from './redux/reducers/users'

const Users = () => {
  const [newUser, setNewUser] = useState('')
  const [userId, setUserId] = useState('')
  const user = useSelector((s) => s.myUsers.user)
  const users = useSelector((s) => s.myUsers.users)
  const email = useSelector((s) => s.myUsers.email)
  const dispatch = useDispatch()
  return (
    <div className=" h-screen bg-gray-700 ">
      <div className="bg-gray-800  flex justify-center p-5 text-white opacity-100  rounded">
        <input
          type="text"
          placeholder="Add user"
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
          className="bg-gray-300 p-1 text-black rounded"
        />
        <button
          type="button"
          className="border rounded p-1 mr-20"
          onClick={() => {
            dispatch({ type: 'ADD_USER', user: newUser })
            setNewUser('')
          }}
        >
          Add
        </button>
        <input
          type="text"
          placeholder="Search user"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="bg-gray-300 p-1 text-black rounded"
        />
        <button
          type="button"
          className="border rounded p-1"
          onClick={() => dispatch(getPlaceUser(userId))}
        >
          View info
        </button>
      </div>

      <div className="text-white">{user.name}</div>
      <div>{email.name}</div>
      {users.map((el) => (
        <div className=" text-white flex justify-around  rounded">{el}</div>
      ))}
    </div>
  )
}
export default Users
