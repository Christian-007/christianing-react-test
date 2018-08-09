import * as t from '../types';

const initState = {
  films: [],
  filmDetail: {},
  characters: [],
  planets: [],
  starships: [],
}

const filmReducers = (state = initState, action) => {
  switch(action.type) {
    
    case t.FETCH_FILMS :
      return {
        ...state, 
        films: action.payload.films
      }
    
    case t.GET_FILM_DETAIL :
      return {
        ...state, 
        filmDetail: action.payload.filmDetail
      }

    case t.GET_BATCH_DETAILS :
      return {
        ...state, 
        [action.fieldName]: [
          ...state[action.fieldName],
          action.payload.fieldDetails,
        ]
      }
    
    default :
      return state
  }
}

export default filmReducers;