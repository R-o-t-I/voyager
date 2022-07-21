import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
  Div,
  Text,
} from "@vkontakte/vkui";

import style from "./UVIModal.module.scss";

import { Icon24DismissDark } from "@vkontakte/icons";

function UVIModal({ nav, router }) {
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
          УФ-индекс
        </ModalPageHeader>
      }
      onClose={() => router.toBack()}
      settlingHeight={100}
    >
      <Div>
        <Text>
          Глобальный солнечный УФ-Индекс (УФИ, UV-index, UVI) – это простая мера
          уровня ультрафиолетовой радиации, достигающей поверхности Земли, и
          одновременно индикатор потенциального поражения кожи
        </Text>
        <div className={style.uviIndicators}>
          <div className={style.uviIndicator}>
            <div className={style.uviIndicator03}>0 - 3</div>
            <div className={style.uviText}>
              Низкий класс опасности: можно не применять средства защиты от
              солнца
            </div>
          </div>
          <div className={style.uviIndicator}>
            <div className={style.uviIndicator46}>4 - 6</div>
            <div className={style.uviText}>
              Средний класс опасности: используйте защитные средства (очки,
              шляпу, рубашки, брюки)
            </div>
          </div>
          <div className={style.uviIndicator}>
            <div className={style.uviIndicator79}>7 - 9</div>
            <div className={style.uviText}>
              Высокий класс опасности: старайтесь не находиться на солнце,
              используйте защитный крем
            </div>
          </div>
          <div className={style.uviIndicator}>
            <div className={style.uviIndicator1012}>10 - 12</div>
            <div className={style.uviText}>
              Экстремальный класс опасности: ищите тень, лучше находиться в
              помещении
            </div>
          </div>
        </div>
      </Div>
    </ModalPage>
  );
}

export default withRouter(UVIModal);
