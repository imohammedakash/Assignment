import React, { useEffect, useState } from 'react';
import { UserList } from './UserList';
import { Routes, Route} from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
const SEC_Token = "ksdji39048sjx&kks*(&akljd^&fkls%&*jdvisu^&tjgg23*85623947%^$&*&*hjkhsf&jkdsf"
const Token = localStorage.getItem('MohammedAkashToken')
function App() {
  const [auth, setAuth] = useState(false)
  
  const authenticated = () => {
    if (SEC_Token === Token) {
      setAuth(true)
    }
  }

  useEffect(() => {
    authenticated()
  })
  



return (
  <div className="container p-4">

      <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/home" element={<ProtectedRoute auth={auth} > <UserList /> </ProtectedRoute>} />
       
      </Routes>

  </div>
);
}

export default App;
