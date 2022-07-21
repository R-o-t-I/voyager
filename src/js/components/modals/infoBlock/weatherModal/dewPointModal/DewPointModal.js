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
} from "@vkontakte/vkui";

import style from "./dewPointModal.module.scss";

import { Icon24DismissDark } from "@vkontakte/icons";

function DewPointModal({ nav, router }) {
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
          Точка росы
        </ModalPageHeader>
      }
      onClose={() => router.toBack()}
      settlingHeight={100}
    >
      <Div>
        Температура точки росы газа (точка росы) – значение температуры газа,
        при которой водяной пар, содержащийся в газе, охлаждаемом изобарически,
        становится насыщенным над плоской поверхностью воды.
      </Div>
      <Div>
        Точка росы – это температура воздуха, при которой содержащийся в нём пар
        достигает состояния насыщения и начинает конденсироваться в росу.
      </Div>
    </ModalPage>
  );
}

export default withRouter(DewPointModal);
