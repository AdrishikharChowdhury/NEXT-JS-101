import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>
      Users
      <ul>
        <li><Link href="/dashboard/users/1">Users 1</Link></li>
        <li><Link href="/dashboard/users/2">Users 2</Link></li>
        <li><Link href="/dashboard/users/3">Users 3</Link></li>
      </ul>
    </div>
  )
}

export default Users
