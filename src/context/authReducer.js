import { AuthState } from "./AuthContext";



//Genera un nuevo estado en base a una acción recibida
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-ser-yet'
      }
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case 'setUserName':
      return {
        ...state,
        username: action.payload
      }
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }
    default:
      return state;
  }
}