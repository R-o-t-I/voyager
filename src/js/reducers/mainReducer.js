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
      hourly: [{ dt: 0, temp: "Загрузка" }],
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
