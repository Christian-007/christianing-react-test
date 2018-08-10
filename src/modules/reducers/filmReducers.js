import * as t from '../types';

const initState = {
  films: {
    isDoneFetching: false,
    data: []
  },
  filmDetail: {},
  characters: {
    isDoneFetching: false,
    data: []
  },
  planets: {
    isDoneFetching: false,
    data: []
  },
  starships: {
    isDoneFetching: false,
    data: []
  },
  fetchError: false,
}

const filmReducers = (state = initState, action) => {
  switch(action.type) {
    
    case t.FETCH_FILMS :
      return {
        ...state, 
        films: {
          isDoneFetching: true,
          data: action.payload.films
        }
      }

    case t.UNMOUNT_FILM_DETAILS :
      return {
        ...state, 
        filmDetail: {},
        characters: {
          isDoneFetching: false,
          data: []
        },
        planets: {
          isDoneFetching: false,
          data: []
        },
        starships: {
          isDoneFetching: false,
          data: []
        },
      }
    
    case t.UNMOUNT_DATA :
      return {
        ...state, 
        [action.fieldName]: {
          ...state[action.fieldName],
          isDoneFetching: false,
        },
        fetchError: false,
      }
    
    case t.ADD_ERROR:
      return {
        ...state,
        fetchError: true
      }
    
    case t.GET_FILM_DETAIL :
      return {
        ...state, 
        filmDetail: action.payload.filmDetail
      }

    case t.GET_BATCH_DETAILS :
      return {
        ...state, 
        [action.fieldName]: {
          ...state[action.payload.fieldName],
          isDoneFetching: true,
          data: action.payload.fieldDetails
        }
      }
    
    default :
      return state
  }
}

export default filmReducers;