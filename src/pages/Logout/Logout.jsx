import { auth } from "../../../firebaseConfig"
import { signOut } from "firebase/auth"

function Logout ( {user} ){
    return(
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Olá, {user.displayName}
        </h2>
        <button 
          onClick={() => signOut (auth)}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
        >
          Sair
        </button>
      </div>
    )
}

export default Logout