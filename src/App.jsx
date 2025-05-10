import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import { auth } from '../firebaseConfig'
import { useState, useEffect } from 'react'



function App() {

  const [user, setUser] = useState(null)
  
  useEffect(() =>{
    auth.onAuthStateChanged(setUser)
  }, []);


  return (
    <>
    <h1 className='mt-8 text-center m-8 text-2xl font-bold text-white '>Autenticação De Login Com o Goole Utilizando Firebase</h1>
    {user ? <Logout user={user}/> :<Login />}
    </>
  );
}

export default App
