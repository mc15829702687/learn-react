import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../../App'

export default function Context() {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  console.log('user', user)
  console.log('theme', theme)

  return (
    <div>
      Context Hook
    </div>
  )
}