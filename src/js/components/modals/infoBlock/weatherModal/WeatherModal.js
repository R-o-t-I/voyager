import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
  Spacing,
} from "@vkontakte/vkui";

import style from "./weatherModal.module.scss";

import { Icon24DismissDark, Icon28WaterDropOutline } from "@vkontakte/icons";

function WeatherModal({ nav, router }) {
  const platform = useSelector((state) => state.main.platform);

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
          <div className={style.titleInfo}>20°</div>
          <div className={style.blockDescInfo}>
            <div className={style.descInfo}>Солнечно</div>
            <div className={style.descInfo}>Ощущается как 19°</div>
          </div>
        </div>
      </div>
      <div className={style.listInfo}>
        <div className={style.blockCellInfo}>
          <Icon28WaterDropOutline className={style.icon} />
          <div className={style.infoCellDesc}>
            <div className={style.infoDesc}>влажность</div>
            <div className={style.infoIndicator}>63%</div>
          </div>
        </div>
        <div className={style.blockCellInfo}>
          <Icon28WaterDropOutline className={style.icon} />
          <div className={style.infoCellDesc}>
            <div className={style.infoDesc}>влажность</div>
            <div className={style.infoIndicator}>63%</div>
          </div>
        </div>
        <div className={style.blockCellInfo}>
          <Icon28WaterDropOutline className={style.icon} />
          <div className={style.infoCellDesc}>
            <div className={style.infoDesc}>влажность</div>
            <div className={style.infoIndicator}>63%</div>
          </div>
        </div>
      </div>
    </ModalPage>
  );
}

export default withRouter(WeatherModal);
