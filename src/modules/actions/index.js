
import * as t from '../types';
import axios from 'axios';

const actionId = Math.random();

// Fetch films on '/films' route
export const fetchFilms = () => {
  return dispatch => {
    dispatch({
      type: t.LOADING_CONTENT,
      id: actionId
    })

    axios.get('https://swapi.co/api/films/')
    .then(response => {
      dispatch(setFilms(response.data.results));
    })
    .catch(error => {
      console.log('error', error);
    });
    
  }
}

// fetch selected film details on '/films/:number' route
export const getFilmDetail = (filmIndex) => {
  return dispatch => {
    axios.get(`https://swapi.co/api/films/${filmIndex}/`)
    .then(response => {
      dispatch(setFilmDetail(response.data));
      dispatch(getBatchDetails('characters', response.data.characters));
      dispatch(getBatchDetails('planets', response.data.planets));
      dispatch(getBatchDetails('starships', response.data.starships));
    })
    .catch(error => {
      console.log('error', error);
      dispatch({
        type: t.ADD_ERROR,
      })
    });
    
  }
}

// fetch sub-details of film details (characters, starships, planets)
export const getBatchDetails = (fieldType, batchDetails) => {
  return dispatch => {
    let promises = batchDetails.map(url => {
      return new Promise((resolve, reject) => {
        axios.get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log('error', error);
          reject(error);
        });
      });
    });

    // Wait for all data to be fetched
    Promise.all(promises).then(results => {
      dispatch(setBatchFields(fieldType, results));
    })
  }
}

// handle navbar style 
export const putPageLocation = (page) => {
  return dispatch => {
    dispatch(setPageLocation(page));
  }
}

// remove films data on redux state
export const unmountData = (fieldName) => {
  return dispatch => {
    dispatch({
      type: t.UNMOUNT_DATA,
      fieldName
    });
  }
}

// remove film details data on redux state
export const unmountDetails = () => {
  return dispatch => {
    dispatch({
      type: t.UNMOUNT_FILM_DETAILS,
    });
  }
}

const setBatchFields = (fieldName, fieldDetails) => {
  return {
    type: t.GET_BATCH_DETAILS,
    fieldName,
    payload: {
      fieldDetails
    }
  };
}

const setPageLocation = (page) => {
  return {
    type: t.SET_PAGE_LOCATION,
    payload: {
      page
    }
  };
}

const setFilmDetail = (filmDetail) => {
  return {
    type: t.GET_FILM_DETAIL,
    payload: {
      filmDetail
    }
  };
}

const setFilms = (films) => {
  return {
    type: t.FETCH_FILMS,
    payload: {
      films
    },
    id: actionId,
  };
}