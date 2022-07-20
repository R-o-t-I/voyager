import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
  FormLayout,
  FormItem,
  NativeSelect,
} from "@vkontakte/vkui";

import { Icon24DismissDark } from "@vkontakte/icons";

function FilterSearchModal({ nav, router }) {
  const platform = useSelector((state) => state.main.platform);

  return (
    <ModalPage
      nav={nav}
      header={
        <ModalPageHeader
          before={<PanelHeaderButton disabled>Очистить</PanelHeaderButton>}
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
    >
      <FormLayout>
        <FormItem top="Места">
          <NativeSelect>
            <option value="1">Все</option>
            <option value="2">Рестораны</option>
            <option value="3">Музеи</option>
          </NativeSelect>
        </FormItem>
      </FormLayout>
    </ModalPage>
  );
}

export default withRouter(FilterSearchModal);
