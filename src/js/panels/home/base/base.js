import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import style from "./base.module.scss";

import { Group, PanelHeader, PanelHeaderButton, ScreenSpinner, VKCOM } from "@vkontakte/vkui";

import {
  Icon28CalendarOutline,
  Icon28CloudOutline,
  Icon28SearchOutline,
} from "@vkontakte/icons";

import restaurant from "../../../../img/icon/restaurant.svg";
import culturalHeritage from "../../../../img/icon/culturalHeritage.svg";
import religion from "../../../../img/icon/religion.svg";

import queryString from "query-string";
import {set} from "../../../reducers/mainReducer";

const axios = require('axios');

function HomePanel({ router }) {
  const dispatch = useDispatch();
  const platform = useSelector((state) => state.main.platform);
  const mainStorage = useSelector((state) => state.main);
  const [weather, setWeather] = useState({});
  const [date, setDate] = useState({});

  useEffect(() => {
    if(mainStorage.baseInfo.loaded === undefined) {
      init();
    }
  }, {});

  async function init() {
    router.toPopout(<ScreenSpinner/>);
    const {data} = await axios.get('init');
    data.info.loaded = true;
    dispatch(set({key: "baseInfo", value: data.info}));
    dispatch(set({ key: "weather", value: data.weather }));
    router.toPopout();
  }

  return (
    <>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderButton
            label={
              platform === VKCOM && <div style={{ marginLeft: 6 }}>Поиск</div>
            }
            onClick={() => router.toPanel("search")}
          >
            <Icon28SearchOutline />
          </PanelHeaderButton>
        }
      >
        Места
      </PanelHeader>
      <Group>
        <div className={style.informationBlock}>
          <div
            className={style.backgroundInformationBlock}
            onClick={() => router.toPanel("weather")}
          >
            <div className={style.backgroundIconWeather}>
              <Icon28CloudOutline
                width={35}
                height={35}
                className={style.iconWeather}
              />
            </div>
            <div className={style.blockInfo}>
              <div className={style.titleInfo}>{Number(mainStorage.baseInfo.weather.day).toFixed(0)}°</div>
              <div className={style.blockDescInfo}>
                <div className={style.descInfo}>вечером {Number(mainStorage.baseInfo.weather.eve).toFixed(0)}°</div>
                <div className={style.descInfo}>ночью {Number(mainStorage.baseInfo.weather.night).toFixed(0)}°</div>
              </div>
            </div>
          </div>
          <div
            className={style.backgroundInformationBlock}
            onClick={() => router.toModal("dateModal")}
          >
            <div className={style.backgroundIconDate}>
              <Icon28CalendarOutline
                width={35}
                height={35}
                className={style.iconDate}
              />
            </div>
            <div className={style.blockInfo}>
              <div className={style.titleInfo}>{mainStorage.baseInfo.day} {(mainStorage.baseInfo.month).toLowerCase()}</div>
              <div className={style.blockDescInfo}>
                <div className={style.descInfo}>{mainStorage.baseInfo.week_day}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.blockCards}>
          <div
            className={style.card}
            onClick={() => router.toPanel("cardCategory")}
          >
            <div className={style.blockCard}>
              <div>
                <img src={restaurant} className={style.iconCard} />
              </div>
              <div className={style.titleCard}>Рестораны</div>
            </div>
          </div>
          <div className={style.card2}>
            <div className={style.blockCard}>
              <div>
                <img src={culturalHeritage} className={style.iconCard2} />
              </div>
              <div className={style.titleCard2}>
                Объекты культурного наследия
              </div>
            </div>
          </div>
          <div className={style.card3}>
            <div className={style.blockCard}>
              <div>
                <img src={religion} className={style.iconCard3} />
              </div>
              <div className={style.titleCard3}>Религиозные организации</div>
            </div>
          </div>
          <div className={style.card4}>
            <div className={style.blockCard}>
              <div>
                <img src={religion} className={style.iconCard4} />
              </div>
              <div className={style.titleCard4}>Выстовочные залы</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.blockCard}>
              <div>
                <img src={restaurant} className={style.iconCard} />
              </div>
              <div className={style.titleCard}>Музеи</div>
            </div>
          </div>
          <div className={style.card2}>
            <div className={style.blockCard}>
              <div>
                <img src={culturalHeritage} className={style.iconCard2} />
              </div>
              <div className={style.titleCard2}>Театры</div>
            </div>
          </div>
          <div className={style.card3}>
            <div className={style.blockCard}>
              <div>
                <img src={religion} className={style.iconCard3} />
              </div>
              <div className={style.titleCard3}>Религиозные организации</div>
            </div>
          </div>
          <div className={style.card4}>
            <div className={style.blockCard}>
              <div>
                <img src={religion} className={style.iconCard4} />
              </div>
              <div className={style.titleCard4}>Выстовочные залы</div>
            </div>
          </div>
        </div>
      </Group>
    </>
  );
}

export default withRouter(HomePanel);
