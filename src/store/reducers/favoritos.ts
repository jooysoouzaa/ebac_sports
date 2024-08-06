// favoritos.ts
interface Favorito {
  id: number
  nome: string
  preco: number
}

interface FavoritosState {
  itens: Favorito[]
}

const initialState: FavoritosState = {
  itens: []
}

const ADD_FAVORITO = 'ADD_FAVORITO'
const REMOVE_FAVORITO = 'REMOVE_FAVORITO'

interface AddFavoritoAction {
  type: typeof ADD_FAVORITO
  payload: Favorito
}

interface RemoveFavoritoAction {
  type: typeof REMOVE_FAVORITO
  payload: number
}

type FavoritosAction = AddFavoritoAction | RemoveFavoritoAction

export const addFavorito = (favorito: Favorito): AddFavoritoAction => ({
  type: ADD_FAVORITO,
  payload: favorito
})

export const removeFavorito = (id: number): RemoveFavoritoAction => ({
  type: REMOVE_FAVORITO,
  payload: id
})

const favoritosReducer = (
  state = initialState,
  action: FavoritosAction
): FavoritosState => {
  switch (action.type) {
    case ADD_FAVORITO:
      return {
        ...state,
        itens: [...state.itens, action.payload]
      }
    case REMOVE_FAVORITO:
      return {
        ...state,
        itens: state.itens.filter((item) => item.id !== action.payload)
      }
    default:
      return state
  }
}

export default favoritosReducer
