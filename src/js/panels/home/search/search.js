import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import style from "./search.module.scss";

import {
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  Search,
  VKCOM,
} from "@vkontakte/vkui";

import { Icon28SlidersOutline } from "@vkontakte/icons";

function SearchPanel({ router }) {
  const platform = useSelector((state) => state.main.platform);

  return (
    <>
      <PanelHeader
        separator={true}
        left={
          <PanelHeaderBack
            label={platform === VKCOM && <div>Назад</div>}
            onClick={() => router.toBack()}
            className={style.iconHeader}
          />
        }
      >
        Поиск
      </PanelHeader>
      <Search
        after
        icon={
          <Icon28SlidersOutline
            onClick={() => router.toModal("filterSearchModal")}
          />
        }
      />
    </>
  );
}

export default withRouter(SearchPanel);
