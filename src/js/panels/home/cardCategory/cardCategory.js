import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "@reyzitwo/react-router-vkminiapps";
import style from "./cardCategory.module.scss";

import {
  PanelHeader,
  PanelHeaderBack,
  Search,
  Header,
  IconButton,
  VKCOM,
  List,
  CellButton,
} from "@vkontakte/vkui";

import {Dropdown} from "@vkontakte/vkui/dist/unstable";

import {
  Icon24Filter,
  Icon28CalendarOutline,
  Icon28FavoriteOutline,
  Icon28ListCheckOutline,
  Icon28ListLikeOutline,
  Icon28MoreHorizontal,
} from "@vkontakte/icons";
import {set} from "../../../reducers/mainReducer";

const axios = require("axios");

let result = false;

function CardCategoryPanel({router}) {
  const platform = useSelector((state) => state.main.platform);
  const mainStorage = useSelector((state) => state.main);

  // const [result, setResult] = useState(false);
  const dispatch = useDispatch();
  const [restaraunts, setRestaraunts] = useState([]);

  useEffect(() => {
    if (mainStorage.restaurants.length === 0) {
      getRestaraunts();
    }
  }, {});

  async function getRestaraunts() {
      const {data} = await axios.get("restaurant.get");
      dispatch(set({key: "restaurants", value: data.data.results}));
  }

  return (
    <>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderBack
            label={platform === VKCOM && <div>Назад</div>}
            onClick={() => router.toBack()}
            className={style.iconHeader}
          />
        }
      >
        <div className={style.textHeader}>Рестораны</div>
      </PanelHeader>
      <div>
        <div className={style.blockImgCategory}/>
        <img
          className={style.imgCategory}
          src="https://media.admagazine.ru/photos/61407d5e9ecf4e1934c46f10/16:9/w_2560%2Cc_limit/IMG_7838.jpg"
        />
      </div>
      <div className={style.blockContent}>
        {platform === VKCOM && (
          <>
            {/*<Spacing separator="bottom" className={style.separatorSearch} />*/}
            <Search/>
          </>
        )}
        {platform !== VKCOM && (
          <>
            <Search/>
          </>
        )}
        <Header
          style={{alignItems: "center"}}
          mode="primary"
          aside={
            <IconButton onClick={() => router.toModal("filterCategoryModal")}>
              <Icon24Filter style={{color: "var(--accent)"}}/>
            </IconButton>
          }
        >
          Каталог
        </Header>
        <div className={style.allCategoryCards}>
          {mainStorage.restaurants.map((item, index) =>
            <>
              <div className={style.cardBlock}>
                <div style={{position: "relative"}}>
                  <img
                    src={item.photo}
                    className={style.imgCard}
                  />
                  <Dropdown
                    placement="bottom-end"
                    content={
                      <List>
                        <CellButton multiline before={<Icon28FavoriteOutline/>}>
                          Добавить в избранное
                        </CellButton>
                        <CellButton multiline before={<Icon28ListLikeOutline/>}>
                          Хочу посетить
                        </CellButton>
                        <CellButton multiline before={<Icon28ListCheckOutline/>}>
                          Отметить посещенным
                        </CellButton>
                        <CellButton multiline before={<Icon28CalendarOutline/>}>
                          Запланировать посещение
                        </CellButton>
                      </List>
                    }
                  >
                    <div className={style.iconMoreCard}>
                      <IconButton>
                        <Icon28MoreHorizontal/>
                      </IconButton>
                    </div>
                  </Dropdown>
                </div>
                <div className={style.infoCard}>
                  <div className={style.title}>{item.name}</div>
                  <div className={style.category}>{item.kitchen} • {item.for_disabled}</div>
                  <div className={style.address}>{item.address_manual}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default withRouter(CardCategoryPanel);
