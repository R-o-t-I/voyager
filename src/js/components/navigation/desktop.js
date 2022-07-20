import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import style from "./navigation.module.scss";

import {
  SplitCol,
  Panel,
  PanelHeader,
  Group,
  Cell,
  List,
  Header,
} from "@vkontakte/vkui";
import ThemeControllers from "./themeControllers";
import {
  Icon28EternalFlameOutline,
  Icon28LocationMapOutline,
  Icon28Profile,
} from "@vkontakte/icons";

function DesktopNavigation({ router }) {
  const hasHeader = useSelector((state) => state.main.hasHeader);

  return (
    <SplitCol fixed width="252px" maxWidth="252px" className={style.splitCol}>
      <Panel id="menuDesktop">
        {hasHeader && <PanelHeader />}
        <Group>
          <List className={style.menuDesktop}>
            <Cell
              onClick={() => router.toView("home")}
              disabled={router.activeView === "home"}
              before={<Icon28EternalFlameOutline />}
              className={
                router.activeView === "home" ? style.activeViewCell : ""
              }
            >
              Места
            </Cell>

            <Cell
              onClick={() => router.toView("map")}
              disabled={router.activeView === "map"}
              before={<Icon28LocationMapOutline />}
              className={
                router.activeView === "map" ? style.activeViewCell : ""
              }
            >
              Карта
            </Cell>

            <Cell
              onClick={() => router.toView("profile")}
              disabled={router.activeView === "profile"}
              before={<Icon28Profile />}
              className={
                router.activeView === "profile" ? style.activeViewCell : ""
              }
            >
              Профиль
            </Cell>
          </List>
        </Group>

        <Group>
          <List className={style.menuDesktop}>
            <Header mode="secondary">Dev кнопки</Header>
            <ThemeControllers />
          </List>
        </Group>
      </Panel>
    </SplitCol>
  );
}

export default withRouter(DesktopNavigation);
