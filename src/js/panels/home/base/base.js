import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import "./base.scss";

import { Group, PanelHeader, PanelHeaderButton, VKCOM } from "@vkontakte/vkui";

import {
  Icon28CalendarOutline,
  Icon28CloudOutline,
  Icon28SearchOutline,
} from "@vkontakte/icons";

import restaurant from "../../../../img/icon/restaurant.svg";
import culturalHeritage from "../../../../img/icon/culturalHeritage.svg";
import religion from "../../../../img/icon/religion.svg";

import queryString from "query-string";

function HomePanel({ router }) {
  const platform = useSelector((state) => state.main.platform);

  return (
    <>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderButton
            label={
              platform === VKCOM && <div style={{ marginLeft: 6 }}>Поиск</div>
            }
          >
            <Icon28SearchOutline />
          </PanelHeaderButton>
        }
      >
        Места
      </PanelHeader>
      <Group>
        <div className="informationBlock">
          <div className="backgroundInformationBlock">
            <div className="backgroundIconWeather">
              <Icon28CloudOutline
                width={35}
                height={35}
                className="iconWeather"
              />
            </div>
            <div className="blockInfo">
              <div className="titleInfo">20°</div>
              <div className="blockDescInfo">
                <div className="descInfo">вечером 16°</div>
                <div className="descInfo">ночью 9°</div>
              </div>
            </div>
          </div>
          <div className="backgroundInformationBlock">
            <div className="backgroundIconDate">
              <Icon28CalendarOutline
                width={35}
                height={35}
                className="iconDate"
              />
            </div>
            <div className="blockInfo">
              <div className="titleInfo">5 июня</div>
              <div className="blockDescInfo">
                <div className="descInfo">воскресенье</div>
              </div>
            </div>
          </div>
        </div>
        <div className="blockCards">
          <div className="card" onClick={() => router.toPanel("cardCategory")}>
            <div className="blockCard">
              <div>
                <img src={restaurant} className="iconCard" />
              </div>
              <div className="titleCard">Рестораны</div>
            </div>
          </div>
          <div className="card2">
            <div className="blockCard">
              <div>
                <img src={culturalHeritage} className="iconCard2" />
              </div>
              <div className="titleCard2">Объекты культурного наследия</div>
            </div>
          </div>
          <div className="card3">
            <div className="blockCard">
              <div>
                <img src={religion} className="iconCard3" />
              </div>
              <div className="titleCard3">Религиозные организации</div>
            </div>
          </div>
          <div className="card4">
            <div className="blockCard">
              <div>
                <img src={religion} className="iconCard4" />
              </div>
              <div className="titleCard4">Выстовочные залы</div>
            </div>
          </div>

          <div className="card">
            <div className="blockCard">
              <div>
                <img src={restaurant} className="iconCard" />
              </div>
              <div className="titleCard">Музеи</div>
            </div>
          </div>
          <div className="card2">
            <div className="blockCard">
              <div>
                <img src={culturalHeritage} className="iconCard2" />
              </div>
              <div className="titleCard2">Театры</div>
            </div>
          </div>
          <div className="card3">
            <div className="blockCard">
              <div>
                <img src={religion} className="iconCard3" />
              </div>
              <div className="titleCard3">Религиозные организации</div>
            </div>
          </div>
          <div className="card4">
            <div className="blockCard">
              <div>
                <img src={religion} className="iconCard4" />
              </div>
              <div className="titleCard4">Выстовочные залы</div>
            </div>
          </div>
        </div>
      </Group>
    </>
  );
}

export default withRouter(HomePanel);
