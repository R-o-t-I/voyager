import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
  IconButton,
  Div,
  Text,
} from "@vkontakte/vkui";

import { Dropdown } from "@vkontakte/vkui/dist/unstable";

import style from "./weatherModal.module.scss";

import {
  Icon16ArrowshapeRightOutline,
  Icon16DropOutline,
  Icon16Fog,
  Icon16InfoOutline,
  Icon16ViewOutline,
  Icon16Wind,
  Icon24DismissDark,
  Icon28CloudOutline,
  Icon28InfoOutline,
  Icon28SpeedometerMiddleOutline,
  Icon28SunOutline,
} from "@vkontakte/icons";

const axios = require("axios");

function WeatherModal({ nav, router }) {
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
    <ModalPage
      nav={nav}
      header={
        <ModalPageHeader
          right={
            <Fragment>
              {platform === ANDROID && (
                <PanelHeaderButton onClick={() => router.toBack()}>
                  <Icon24DismissDark />
                </PanelHeaderButton>
              )}
              {platform === IOS && (
                <PanelHeaderButton onClick={() => router.toBack()}>
                  <Icon24DismissDark />
                </PanelHeaderButton>
              )}
            </Fragment>
          }
        >
          Погода в Питере
        </ModalPageHeader>
      }
      onClose={() => router.toBack()}
      settlingHeight={100}
    >
      <div className={style.blockInfo}>
        <img
          src="https://www.rabochy-put.ru/upload/iblock/f31/solntse.jpg"
          className={style.img}
        />
        <div className={style.infoWeather}>
          <div className={style.titleInfo}>
            {Number(current.temp).toFixed(1)}℃
          </div>
          <div className={style.blockDescInfo}>
            <div className={style.descBlock}>
              <img
                className={style.imgDesc}
                src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
              />
              <div className={style.descInfo}>{currentWeather.description}</div>
            </div>
            <div className={style.descInfo}>
              Ощущается как {Number(current.feels_like).toFixed(1)}℃
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
              <div className={style.infoDesc}>
                индекс ультрафиолетового излучения
              </div>
              <Dropdown
                action="click"
                placement="auto"
                className={style.dropdown}
                content={
                  <Div>
                    <Text>
                      Глобальный солнечный УФ-Индекс (УФИ, UV-index, UVI) – это
                      простая мера уровня ультрафиолетовой радиации, достигающей
                      поверхности Земли, и одновременно индикатор потенциального
                      поражения кожи
                    </Text>
                    <div className={style.uviIndicators}>
                      <div className={style.uviIndicator}>
                        <div className={style.uviIndicator03}>0 - 3</div>
                        <div className={style.uviText}>
                          Низкий класс опасности: можно не применять средства
                          защиты от солнца
                        </div>
                      </div>
                      <div className={style.uviIndicator}>
                        <div className={style.uviIndicator46}>4 - 6</div>
                        <div className={style.uviText}>
                          Средний класс опасности: используйте защитные средства
                          (очки, шляпу, рубашки, брюки)
                        </div>
                      </div>
                      <div className={style.uviIndicator}>
                        <div className={style.uviIndicator79}>7 - 9</div>
                        <div className={style.uviText}>
                          Высокий класс опасности: старайтесь не находиться на
                          солнце, используйте защитный крем
                        </div>
                      </div>
                      <div className={style.uviIndicator}>
                        <div className={style.uviIndicator1012}>10 - 12</div>
                        <div className={style.uviText}>
                          Экстремальный класс опасности: ищите тень, лучше
                          находиться в помещении
                        </div>
                      </div>
                    </div>
                  </Div>
                }
              >
                <Icon16InfoOutline className={style.iconTitleBlock} />
              </Dropdown>
            </div>
            <div className={style.infoIndicator}>{Number(current.uvi)}</div>
          </div>
        </div>
        <div className={style.blockCellInfo}>
          <Icon28CloudOutline width={28} height={28} className={style.icon} />
          <div className={style.infoCellDesc}>
            <div className={style.infoDesc}>облачность</div>
            <div className={style.infoIndicator}>{Number(current.clouds)}</div>
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
              <Dropdown
                action="click"
                placement="auto"
                className={style.dropdown}
                content={
                  <Div>
                    <Text>
                      Точка росы — это температура воздуха, при которой
                      содержащийся в нём пар достигает состояния насыщения и
                      начинает конденсироваться в росу
                    </Text>
                  </Div>
                }
              >
                <Icon16InfoOutline className={style.iconTitleBlock} />
              </Dropdown>
            </div>
            <div className={style.infoIndicator}>
              {Number(current.dew_point)}
            </div>
          </div>
        </div>
      </div>
    </ModalPage>
  );
}

export default withRouter(WeatherModal);
