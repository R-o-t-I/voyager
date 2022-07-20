import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
  PanelHeaderClose,
  FormLayout,
  FormItem,
  NativeSelect,
  Button,
  Div,
  Checkbox,
} from "@vkontakte/vkui";

import { Icon24DismissDark } from "@vkontakte/icons";

function FilterCategoryModal({ nav, router }) {
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
        <FormItem top="Сортировка">
          <NativeSelect>
            <option value="1">По алфавиту a-я</option>
            <option value="2">По алфавиту я-а</option>
            <option value="3">По удаленности</option>
          </NativeSelect>
        </FormItem>
        <FormItem top="Категория музея">
          <NativeSelect>
            <option value="1">Все</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </NativeSelect>
        </FormItem>
        <FormItem>
          <Checkbox>Избранные</Checkbox>
          <Checkbox>Хочу посетить</Checkbox>
          <Checkbox>Посещенные</Checkbox>
          <Checkbox>Запланировано посещение</Checkbox>
        </FormItem>
        <Div>
          <Button size="m" stretched>
            Применить фильтры
          </Button>
        </Div>
      </FormLayout>
    </ModalPage>
  );
}

export default withRouter(FilterCategoryModal);
