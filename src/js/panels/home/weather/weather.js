import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "@reyzitwo/react-router-vkminiapps";

import style from "./weather.module.scss";

import {
  Div,
  Group,
  Header,
  HorizontalScroll,
  PanelHeader,
  PanelHeaderBack,
  Text,
  VKCOM,
} from "@vkontakte/vkui";

import {Dropdown} from "@vkontakte/vkui/dist/unstable";

import {
  Icon16ArrowshapeRightOutline,
  Icon16DropOutline,
  Icon16Fog,
  Icon16InfoOutline,
  Icon16ViewOutline,
  Icon16Wind,
  Icon28CloudOutline,
  Icon28SpeedometerMiddleOutline,
  Icon28SunOutline,
} from "@vkontakte/icons";

import queryString from "query-string";
import {set} from "../../../reducers/mainReducer";

const axios = require("axios");

function WeatherPanel({router}) {
  const platform = useSelector((state) => state.main.platform);
  const mainStorage = useSelector((state) => state.main);
  const [result, setResult] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!result) {
      getWeather();
      setResult(true);
    }
  }, {});

  async function getWeather() {
    const {data} = await axios.get("weather.get");

    dispatch(set({key: "weather", value: data.info.weather}));
  }

  function timeConverterHourly(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000),
      hour = a.getHours(),
      min = a.getMinutes(),
      time = hour + ":" + min;
    return time;
  }

  function timeConverterDaily(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000),
      months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],
      month = months[a.getMonth()],
      date = a.getDate(),
      time = date + " " + month;
    return time;
  }

  function getWeekDay(unix) {
    let date = new Date(unix * 1000),
      days = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
      ],
      day = days[date.getDay()];

    return day;
  }

  function changeDayFormat(number) {
    let changedNumber;

    if(number >= 1 && number <= 9) {
      number = String(number);
      changedNumber = "0" + number
    }
    if(number >= 1 && number <= 9) {
      number = String(number);
      changedNumber = "0" + number
    }

    return changedNumber;
  }


  return (
    <>
      <div>
        {getWeekDay(0)}
      </div>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderBack
            label={platform === VKCOM && <div>Назад</div>}
            onClick={() => router.toBack()}
            className={style.iconHeader}
          />
        }
      >
        Погода в Питере {mainStorage.weather.description}
      </PanelHeader>
      <Group>
        <div className={style.blockInfo}>
          <div className={style.tempWeatherBlock}>
            <div className={style.temp}>
              <div className={style.headerTemp}>сейчас</div>
              <div className={style.tempTitle}>
                {(mainStorage.weather.current.temp * 1).toFixed(1)}℃
              </div>
              <div className={style.blockDescInfo}>
                <div className={style.imgDescBackground}>
                  <img
                    className={style.imgDesc}
                    src={`http://openweathermap.org/img/w/${mainStorage.weather.current.weather[0].icon}.png`}
                  />
                </div>
                <div className={style.descBlock}>
                  <div className={style.descTemp}>
                    {mainStorage.weather.current.weather[0].description}
                  </div>
                  <div className={style.descTemp}>
                    ощущается как{" "}
                    {(mainStorage.weather.current.feels_like * 1).toFixed(1)}℃
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.dailyTempBlock}>
            <div className={style.dailyTemp}>
              <div className={style.dailyTempBlocks}>
                <div className={style.dailyTempItem}>
                  <div className={style.headerTemp}>утро</div>
                  <div>12℃</div>
                </div>
                <div className={style.dailyTempItem}>
                  <div className={style.headerTemp}>день</div>
                  <div>12℃</div>
                </div>
                <div className={style.dailyTempItem}>
                  <div className={style.headerTemp}>вечер</div>
                  <div>12℃</div>
                </div>
                <div className={style.dailyTempItem}>
                  <div className={style.headerTemp}>ночь</div>
                  <div>12℃</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.weatherHourlyBlock}>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div className={style.weatherHourlyItems}>
              {mainStorage.weather.hourly.map((item, index) => (
                <div className={style.weatherHourlyItem}>
                  <div className={style.titleHourly}>
                    {timeConverterHourly(Number(item.dt))}
                  </div>
                  <div>
                    <img
                      className={style.imgHourly}
                      src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    />
                  </div>
                  <div className={style.descHourly}>
                    {item.weather[0].description}
                  </div>
                  <div className={style.tempHourly}>
                    {(item.temp * 1).toFixed(1)}℃
                  </div>
                </div>
              ))}
            </div>
          </HorizontalScroll>
        </div>
        <div></div>
        <div className={style.listInfo}>
          <div className={style.blockCellInfo}>
            <Icon16DropOutline width={28} height={28} className={style.icon}/>
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>влажность</div>
              <div className={style.infoIndicator}>
                {mainStorage.weather.current.humidity}%
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon28SpeedometerMiddleOutline className={style.icon}/>
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>давление</div>
              <div className={style.infoIndicator}>
                {(mainStorage.weather.current.pressure / 1.33).toFixed(1)}{" "}
                мм.рт.ст.
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16Wind width={28} height={28} className={style.icon}/>
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>скорость ветра</div>
              <div className={style.infoIndicator}>
                {mainStorage.weather.current.wind_speed} м/с
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16ArrowshapeRightOutline
              width={28}
              height={28}
              className={style.icon}
            />
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>направление ветра</div>
              <div className={style.infoIndicator}>
                {mainStorage.weather.current.wind_deg}°
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16ViewOutline width={28} height={28} className={style.icon}/>
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>видимость</div>
              <div className={style.infoIndicator}>
                {(mainStorage.weather.current.visibility / 1000).toFixed(1)} км
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon28SunOutline width={28} height={28} className={style.icon}/>
            <div className={style.infoCellDesc}>
              <div className={style.titleBlock}>
                <div className={style.infoDesc}>УФ-индекс</div>
                <Icon16InfoOutline
                  className={style.iconTitleBlock}
                  onClick={() => router.toModal("uviModal")}
                />
              </div>
              <div className={style.infoIndicator}>
                {mainStorage.weather.current.uvi}
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon28CloudOutline width={28} height={28} className={style.icon}/>
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>облачность</div>
              <div className={style.infoIndicator}>
                {mainStorage.weather.current.clouds}%
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16Fog
              style={{transform: "rotate(90deg)"}}
              width={28}
              height={28}
              className={style.icon}
            />
            <div className={style.infoCellDesc}>
              <div className={style.titleBlock}>
                <div className={style.infoDesc}>точка росы</div>

                <Icon16InfoOutline
                  className={style.iconTitleBlock}
                  onClick={() => router.toModal("dewPointModal")}
                />
              </div>
              <div className={style.infoIndicator}>
                {mainStorage.weather.current.dew_point}
              </div>
            </div>
          </div>
        </div>
        <div className={style.weatherDailyItems}>
          <Header>Погода на неделю</Header>
          {mainStorage.weather.daily.map((item, index) => (
            <div className={style.weatherDailyItem}>
              <div className={style.infoDay}>
                <div
                  className={getWeekDay(item.dt) === "суббота" || getWeekDay(item.dt) === "воскресенье" && `${style.day}`}>{getWeekDay(item.dt)}</div>
                <div className={style.date}>
                  {timeConverterDaily(Number(item.dt))}
                </div>
              </div>
              <div className={style.blockEnd}>
                <div className={style.blockEndItems}>
                  <div>
                    <img
                      className={style.imgDaily}
                      src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    />
                  </div>
                  <div className={style.tempDayDaily}>
                    {(item.temp.day * 1).toFixed(1)}℃
                  </div>
                  <div className={style.tempNightDaily}>
                    {(item.temp.night * 1).toFixed(1)}℃
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Group>
    </>
  );
}

export default withRouter(WeatherPanel);
