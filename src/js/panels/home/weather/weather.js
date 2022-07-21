import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";

import style from "./weather.module.scss";

import {
  Div,
  Group,
  PanelHeader,
  PanelHeaderBack,
  Text,
  VKCOM,
} from "@vkontakte/vkui";

import { Dropdown } from "@vkontakte/vkui/dist/unstable";

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

const axios = require("axios");

function WeatherPanel({ router }) {
  const platform = useSelector((state) => state.main.platform);
  const [current, setCurrent] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (!result) {
      getWeather();
      setResult(true);
    }
  });

  async function getWeather() {
    const { data } = await axios.get("init");

    setCurrent(data.info.weather.current);
    setCurrentWeather(data.info.weather.current.weather[0]);
    console.log(data.info.weather.current);
  }

  return (
    <>
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
        Погода в Питере
      </PanelHeader>
      <Group>
        <div className={style.blockInfo}>
          <div className={style.tempWeatherBlock}>
            <div className={style.temp}>
              <div className={style.headerTemp}>сейчас</div>
              <div className={style.tempTitle}>
                {Number(current.temp).toFixed(1)}℃
              </div>
              <div className={style.blockDescInfo}>
                <div className={style.imgDescBackground}>
                  <img
                    className={style.imgDesc}
                    src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                  />
                </div>
                <div className={style.descBlock}>
                  <div className={style.descTemp}>
                    {currentWeather.description}
                  </div>
                  <div className={style.descTemp}>
                    ощущается как {Number(current.feels_like).toFixed(1)}℃
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
        <div className={style.listInfo}>
          <div className={style.blockCellInfo}>
            <Icon16DropOutline width={28} height={28} className={style.icon} />
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>влажность</div>
              <div className={style.infoIndicator}>
                {Number(current.humidity)}%
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon28SpeedometerMiddleOutline className={style.icon} />
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>давление</div>
              <div className={style.infoIndicator}>
                {Number(current.pressure / 1.33).toFixed(1)} мм.рт.ст.
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16Wind width={28} height={28} className={style.icon} />
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>скорость ветра</div>
              <div className={style.infoIndicator}>
                {Number(current.wind_speed)} м/с
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
                {Number(current.wind_deg)}°
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16ViewOutline width={28} height={28} className={style.icon} />
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>видимость</div>
              <div className={style.infoIndicator}>
                {Number(current.visibility / 1000).toFixed(1)} км
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon28SunOutline width={28} height={28} className={style.icon} />
            <div className={style.infoCellDesc}>
              <div className={style.titleBlock}>
                <div className={style.infoDesc}>УФ-индекс</div>
                <Icon16InfoOutline
                  className={style.iconTitleBlock}
                  onClick={() => router.toModal("uviModal")}
                />
              </div>
              <div className={style.infoIndicator}>{Number(current.uvi)}</div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon28CloudOutline width={28} height={28} className={style.icon} />
            <div className={style.infoCellDesc}>
              <div className={style.infoDesc}>облачность</div>
              <div className={style.infoIndicator}>
                {Number(current.clouds)}
              </div>
            </div>
          </div>
          <div className={style.blockCellInfo}>
            <Icon16Fog
              style={{ transform: "rotate(90deg)" }}
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
                {Number(current.dew_point)}
              </div>
            </div>
          </div>
        </div>
      </Group>
    </>
  );
}

export default withRouter(WeatherPanel);
