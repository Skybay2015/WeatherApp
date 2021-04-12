import axios from '../../axios/axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
   weatherFetchError,
   weatherFetchStart,
   weatherFetchSuccess,
} from '../actions/actionCreators';
import { FETCH_WEATHER } from '../types';

export function* sagaWeatherWatcher() {
   yield takeLatest(FETCH_WEATHER, sagaWeatherWorker);
}

function getDay(string) {
   return string.slice(0, -8);
}

export function* sagaWeatherWorker({ payload }) {
   yield put(weatherFetchStart());

   try {
      const { data } = yield call(getWeather, payload);
      const { list } = data;

      let dayDate = getDay(list[0]['dt_txt']);
      const tempArr = [];

      const filteredByDaysArr = list.reduce((arr, item) => {
         if (dayDate !== getDay(item['dt_txt'])) {
            arr.push([...tempArr]);

            tempArr.length = 0;
            dayDate = getDay(item['dt_txt']);
         }
         tempArr.push(item);

         return arr;
      }, []);

      data.list = filteredByDaysArr;

      yield put(
         weatherFetchSuccess({
            data,
         }),
      );
   } catch (e) {
      yield put(weatherFetchError(e.message));
   }
}

async function getWeather(city) {
   return await axios.get(
      `forecast?q=${city}&units=metric&appid=5918d42ecb8d1df4c4432b20210ffdbd`,
   );
}
