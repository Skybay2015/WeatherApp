import {
   FETCH_WEATHER_ERROR,
   FETCH_WEATHER_START,
   FETCH_WEATHER_SUCCESS,
   FETCH_WEATHER,
} from '../types';

export function weatherFetchStart() {
   return {
      type: FETCH_WEATHER_START,
   };
}

export function weatherFetch(city) {
   return {
      type: FETCH_WEATHER,
      payload: city,
   };
}

export function weatherFetchSuccess(data) {
   return {
      type: FETCH_WEATHER_SUCCESS,
      payload: data,
   };
}

export function weatherFetchError(error) {
   return {
      type: FETCH_WEATHER_ERROR,
      payload: error,
   };
}
