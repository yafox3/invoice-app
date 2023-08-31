import AppRouter from './components/AppRouter'
import React from 'react'

const App = () => {
  const [user, setUser] = React.useState({
    username: '',
    avatar: '',
    invoices: [],
  })

  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
