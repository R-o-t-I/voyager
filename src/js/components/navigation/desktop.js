import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import "./navigation.scss";

import {
  SplitCol,
  Panel,
  PanelHeader,
  Group,
  Cell,
  List,
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
    <SplitCol fixed width="252px" maxWidth="252px" className="splitCol">
      <Panel id="menuDesktop">
        {hasHeader && <PanelHeader />}
        <Group>
          <List className="menuDesktop">
            <Cell
              onClick={() => router.toView("home")}
              disabled={router.activeView === "home"}
              before={<Icon28EternalFlameOutline />}
              className={router.activeView === "home" ? "activeViewCell" : ""}
            >
              Места
            </Cell>

            <Cell
              onClick={() => router.toView("map")}
              disabled={router.activeView === "map"}
              before={<Icon28LocationMapOutline />}
              className={router.activeView === "map" ? "activeViewCell" : ""}
            >
              Карта
            </Cell>

            <Cell
              onClick={() => router.toView("profile")}
              disabled={router.activeView === "profile"}
              before={<Icon28Profile />}
              className={
                router.activeView === "profile" ? "activeViewCell" : ""
              }
            >
              Профиль
            </Cell>
          </List>
        </Group>

        <ThemeControllers />
      </Panel>
    </SplitCol>
  );
}

export default withRouter(DesktopNavigation);
