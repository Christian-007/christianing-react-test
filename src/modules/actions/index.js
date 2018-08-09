import * as t from '../types';
import axios from 'axios';

export const fetchFilms = () => {
  return dispatch => {
    axios.get('https://swapi.co/api/films/')
    .then(response => {
      console.log('response', response);
      dispatch(setFilms(response.data.results));
    })
    .catch(error => {
      console.log('error', error);
    });
    
  }
}

export const getFilmDetail = (filmIndex) => {
  return dispatch => {
    axios.get(`https://swapi.co/api/films/${filmIndex}/`)
    .then(response => {
      console.log('response', response);
      dispatch(setFilmDetail(response.data));
      dispatch(getBatchDetails(response.data.characters));
    })
    .catch(error => {
      console.log('error', error);
    });
    
  }
}

export const getBatchDetails = (batchDetails) => {
  console.log('batchDetails: ', batchDetails);
  return dispatch => {
    batchDetails.map(url => {
      axios.get(url)
      .then(response => {
        console.log('response', response);
        // resolve(response.data.name);
        dispatch(setBatchFields('characters', response));
      })
      .catch(error => {
        console.log('error', error);
        // reject(error);
      });
    })
    // promiseFetching(batchDetails)
    // .then(response => {
    //   console.log('response of characters:', response);
    //   dispatch(setBatchFields(response));
    // })
  }
}

export const putPageLocation = (page) => {
  return dispatch => {
    dispatch(setPageLocation(page));
  }
}

const promiseFetching = (batchDetails) => {
  return new Promise((resolve, reject) => {
    batchDetails.map(url => {
      axios.get(url)
      .then(response => {
        console.log('response', response);
        resolve(response.data.name);
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
    })
  });
};

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
    }
  };
}