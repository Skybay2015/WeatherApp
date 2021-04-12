import {
   FETCH_WEATHER_ERROR,
   FETCH_WEATHER_SUCCESS,
   FETCH_WEATHER_START,
} from '../types';

const initialState = {
   loading: false,
   data: null,
   error: null,
};

export default function weatherReducer(
   state = initialState,
   { type, payload },
) {
   switch (type) {
      case FETCH_WEATHER_SUCCESS:
         return {
            ...state,
            loading: false,
            data: payload.data,
            error: null,
         };
      case FETCH_WEATHER_ERROR:
         return {
            ...state,
            loading: false,
            error: payload,
         };

      case FETCH_WEATHER_START:
         return {
            ...state,
            loading: true,
         };
      default:
         return state;
   }
}
