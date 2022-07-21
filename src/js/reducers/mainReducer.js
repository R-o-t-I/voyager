import { createSlice } from "@reduxjs/toolkit";

export const mainReducer = createSlice({
  name: "main",
  initialState: {
    platform: "",
    isDesktop: false,
    theme: "light",
    hasHeader: false,
    infoUser: { name: "Загрузка..." },
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

export const { set } = mainReducer.actions;
export default mainReducer.reducer;
