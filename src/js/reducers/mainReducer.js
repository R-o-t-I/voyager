import {createSlice} from "@reduxjs/toolkit";

export const mainReducer = createSlice({
  name: "main",
  initialState: {
    Authorization_token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczNzAyNzkyfQ.yHAeZTBMW8t5O2cWGW0rCVuce_Qlm1loQn3grQbN8OE",
    platform: "",
    isDesktop: false,
    theme: "light",
    hasHeader: false,
    infoUser: {name: "Загрузка..."},
    baseInfo: {
      weather: {
        day: 0,
        min: 0,
        max: 0,
        night: 0,
        eve: 0,
        morn: 0
      },
      time: 0,
      day: 0,
      month: "",
      week_day: ""
    },
    restaurants: [],
    filter: {
      sort: '',
      category: ''
    },
    weather: {
      lat: "Загрузка",
      lon: "Загрузка",
      timezone: "Europe/Moscow",
      timezone_offset: "Загрузка",
      current: {
        dt: "Загрузка",
        sunrise: "Загрузка",
        sunset: "Загрузка",
        temp: "Загрузка",
        feels_like: "Загрузка",
        pressure: "Загрузка",
        humidity: "Загрузка",
        dew_point: "Загрузка",
        uvi: "Загрузка",
        clouds: "Загрузка",
        visibility: "Загрузка",
        wind_speed: "Загрузка",
        wind_gust: "Загрузка",
        wind_deg: "Загрузка",
        weather: [
          {
            id: 0,
            main: "",
            description: "",
            icon: "",
          },
        ],
      },
      minutely: [
        {
          dt: 0,
          precipitation: 0,
        },
      ],
      hourly: [
        {
          dt: 0,
          temp: "Загрузка",
          weather: [
            {
              id: 0,
              main: "",
              description: "",
              icon: "",
            },
          ],
          pop: 0,
        },
      ],
      daily: [
        {
          dt: 0,
          sunrise: 0,
          sunset: 0,
          moonrise: 0,
          moonset: 0,
          moon_phase: "Загрузка",
          temp: {
            day: "Загрузка",
            min: "Загрузка",
            max: "Загрузка",
            night: "Загрузка",
            eve: "Загрузка",
            morn: "Загрузка",
          },
          feels_like: {
            day: "Загрузка",
            night: "Загрузка",
            eve: "Загрузка",
            morn: "Загрузка",
          },
          pressure: "Загрузка",
          humidity: "Загрузка",
          dew_point: "Загрузка",
          wind_speed: "Загрузка",
          wind_deg: "Загрузка",
          weather: [
            {
              id: 0,
              main: "Загрузка",
              description: "Загрузка",
              icon: "",
            },
          ],
          clouds: "Загрузка",
          pop: "Загрузка",
          rain: "Загрузка",
          uvi: "Загрузка",
        },
      ],
    },
  },
  reducers: {
    set: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const {set} = mainReducer.actions;
export default mainReducer.reducer;
