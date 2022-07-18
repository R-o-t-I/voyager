import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import style from "./base.module.scss";

import { PanelHeader, PanelHeaderButton, VKCOM } from "@vkontakte/vkui";

import { Icon28SlidersOutline } from "@vkontakte/icons";

function MapPanel({ router }) {
  const platform = useSelector((state) => state.main.platform);

  return (
    <>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderButton
            label={
              platform === VKCOM && <div style={{ marginLeft: 6 }}>Фильтры</div>
            }
            onClick={() => router.toModal("mapFilterModal")}
          >
            <Icon28SlidersOutline />
          </PanelHeaderButton>
        }
      >
        Карта
      </PanelHeader>

      <div className={style.mapBlock}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6486245bceaaeb089a81f876e3c19c606e44817ab8af71bbec3a8862b75bd53f&amp;source=constructor"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
}

export default withRouter(MapPanel);
