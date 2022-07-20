import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
} from "@vkontakte/vkui";

import { Icon24DismissDark } from "@vkontakte/icons";

function FilterMapModal({ nav, router }) {
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
          Фильтры
        </ModalPageHeader>
      }
      onClose={() => router.toBack()}
      settlingHeight={100}
    ></ModalPage>
  );
}

export default withRouter(FilterMapModal);
