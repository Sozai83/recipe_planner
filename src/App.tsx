import { useState } from 'react'
import LoginPage from './pages/Login'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGuestLogin, setIsGuestLogin] = useState(false);

  const handleLoginState = (state: boolean) => {
    setIsLoggedIn(state);
  }

  const handleGuestLogin = () => {
    setIsGuestLogin(true);
  }

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage handleLoginState={handleLoginState} handleGuestLogin={handleGuestLogin} />
      </>
    )
  }
}

export default App
