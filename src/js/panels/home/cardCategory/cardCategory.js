import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import "./cardCategory.scss";

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

import { Dropdown } from "@vkontakte/vkui/dist/unstable";

import {
  Icon24Filter,
  Icon28CalendarOutline,
  Icon28FavoriteOutline,
  Icon28ListCheckOutline,
  Icon28ListLikeOutline,
  Icon28MoreHorizontal,
} from "@vkontakte/icons";

function CardCategoryPanel({ router }) {
  const platform = useSelector((state) => state.main.platform);

  return (
    <>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderBack
            label={platform === VKCOM && <div>Назад</div>}
            onClick={() => router.toBack()}
            className="iconHeader"
          />
        }
      >
        <div className="textHeader">Рестораны</div>
      </PanelHeader>

      <div>
        <div className="blockImgCategory" />
        <img
          className="imgCategory"
          src="https://media.admagazine.ru/photos/61407d5e9ecf4e1934c46f10/16:9/w_2560%2Cc_limit/IMG_7838.jpg"
        />
      </div>
      <div className="blockContent">
        {platform === VKCOM && (
          <>
            {/*<Spacing separator="bottom" className="separatorSearch" />*/}
            <Search />
          </>
        )}
        {platform !== VKCOM && (
          <>
            <Search />
          </>
        )}
        <Header
          style={{ alignItems: "center" }}
          mode="primary"
          aside={
            <IconButton onClick={() => router.toModal("filterCategoryModal")}>
              <Icon24Filter style={{ color: "var(--accent)" }} />
            </IconButton>
          }
        >
          Каталог
        </Header>
        <div className="allCategoryCards">
          <div className="cardBlock">
            <div style={{ position: "relative" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Grand_Cascade_of_Peterhof_01.jpg/640px-Grand_Cascade_of_Peterhof_01.jpg"
                className="imgCard"
              />
              <Dropdown
                placement="bottom-end"
                content={
                  <List>
                    <CellButton multiline before={<Icon28FavoriteOutline />}>
                      Добавить в избранное
                    </CellButton>
                    <CellButton multiline before={<Icon28ListLikeOutline />}>
                      Хочу посетить
                    </CellButton>
                    <CellButton multiline before={<Icon28ListCheckOutline />}>
                      Отметить посещенным
                    </CellButton>
                    <CellButton multiline before={<Icon28CalendarOutline />}>
                      Запланировать посещение
                    </CellButton>
                  </List>
                }
              >
                <div className="iconMoreCard">
                  <IconButton>
                    <Icon28MoreHorizontal />
                  </IconButton>
                </div>
              </Dropdown>
            </div>
            <div className="infoCard">
              <div className="title">Музей "Государственный Эрмитаж"</div>
              <div className="category">Художественные</div>
              <div className="address">Дворцовая пл., 2</div>
            </div>
          </div>
          <div className="cardBlock">
            <div style={{ position: "relative" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Grand_Cascade_of_Peterhof_01.jpg/640px-Grand_Cascade_of_Peterhof_01.jpg"
                className="imgCard"
              />
              <Dropdown
                placement="bottom-end"
                content={
                  <List>
                    <CellButton multiline before={<Icon28FavoriteOutline />}>
                      Добавить в избранное
                    </CellButton>
                    <CellButton multiline before={<Icon28ListLikeOutline />}>
                      Хочу посетить
                    </CellButton>
                    <CellButton multiline before={<Icon28ListCheckOutline />}>
                      Отметить посещенным
                    </CellButton>
                    <CellButton multiline before={<Icon28CalendarOutline />}>
                      Запланировать посещение
                    </CellButton>
                  </List>
                }
              >
                <div className="iconMoreCard">
                  <IconButton>
                    <Icon28MoreHorizontal />
                  </IconButton>
                </div>
              </Dropdown>
            </div>
            <div className="infoCard">
              <div className="title">title</div>
              <div className="category">category</div>
              <div className="address">locations</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CardCategoryPanel);
