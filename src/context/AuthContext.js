import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";


//Definir como luce o qué información habrá aquí




//Estado inicial (cuando la aplicacion se lanza)
export const authInitialState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
}

//Definimos todo lo que el context va a compartir con sus hijos




//Crear el contexto
export const AuthContext = createContext({});

//Exponemos el proveedor del estado
export const AuthProvider = ({ children }) => {
  

  //Utilizamos useReducer para efectuar eventos que cambien nuestro estado (similar al useState)
  //El reducer se encargará de devolver los cambios efectuados en el state (con entrada de args)
  //El dispatch accionará enventos que serán ejectutados en el reducer
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  //Actions
  const signIn = () => {
    dispatch({type: 'signIn'});
  }

  const changeFavoriteIcon = (iconName) => {
    dispatch({type: 'changeFavIcon', payload: iconName})
  }

  const logout = () => {
    dispatch({type: 'logout'});
  }

  const setUserName = (username) => {
    dispatch({type: 'setUserName', payload: username})
  }


  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      setUserName,
      changeFavoriteIcon
    }}>
      {children}
    </AuthContext.Provider>
  )
}

