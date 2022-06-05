import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from '@reyzitwo/react-router-vkminiapps';
import './base.css';

import {
  PanelHeader,
  PanelHeaderButton,
  Avatar,
  Title,
  ScreenSpinner,
  Group,
  SimpleCell,
  List,
  Counter,
  Footer,
  Link,
  Div,
  Tappable,
} from "@vkontakte/vkui";

import {
  Icon16ChevronOutline,
  Icon28CalendarOutline,
  Icon28LikeOutline,
  Icon28ListCheckOutline,
  Icon28ListLikeOutline,
  Icon28SettingsOutline,
  Icon28TicketOutline,
  Icon28WriteSquareOutline,
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

import { set } from "../../../reducers/mainReducer";

let isInfoUser = false

function ProfilePanelBase({ router }) {
  const mainStorage = useSelector((state) => state.main)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isInfoUser) {
      getInfoUser()
    }
  }, [])

  async function getInfoUser() {
    router.toPopout(<ScreenSpinner/>)

    let user_info = await bridge.send('VKWebAppGetUserInfo');
    user_info.name = user_info.first_name + ' ' + user_info.last_name
    dispatch(set({ key: 'infoUser', value: user_info }))

    isInfoUser = true
    router.toPopout()
  }

  return (
    <>
      <PanelHeader
        separator={false}
        left={
          <PanelHeaderButton
            //{params.vk_platform === "desktop_web" ?
            //  label="Поиск"
            //: undefined}
          >
            <Icon28SettingsOutline />
          </PanelHeaderButton>
        }
      >
        Профиль
      </PanelHeader>
      <Group>
        <div className="profileInfoBlock">
          <Avatar size={90} src={mainStorage.infoUser.photo_200}/>
          <Title 
            className='nameUser'
            level="2" 
            weight="medium"
          >
            {mainStorage.infoUser.name}
          </Title>
        </div>
        <div className="informationBlock">
          <div className="backgroundInformationBlock">
            <Tappable className="tappable">
              <div className="backgroundIconFavorites">
                <Icon28LikeOutline width={35} height={35} className="iconFavorites" />
              </div>
              <div className="blockInfo">
                <div className="titleInfo">5</div>
                <div className="blockDescInfo">
                  <div className="descInfo">
                    <div>избранное</div>
                    <div><Icon16ChevronOutline className="iconChevronDescInfo" /></div>
                  </div>
                </div>
              </div>
            </Tappable>
          </div>
          <div className="backgroundInformationBlock">
            <Tappable className="tappable">
              <div className="backgroundIconVisited">
                <Icon28ListCheckOutline width={35} height={35} className="iconVisited" />
              </div>
              <div className="blockInfo">
                <div className="titleInfo">3</div>
                <div className="blockDescInfo">
                  <div className="descInfo">
                    <div>мест посетил</div>
                    <div><Icon16ChevronOutline className="iconChevronDescInfo"/></div>
                  </div>
                </div>
              </div>
            </Tappable>
          </div>
        </div>
        <List className="blockListCell">
          <SimpleCell 
            before={<Icon28TicketOutline />}
            indicator={<Counter>4</Counter>}
            expandable
            multiline
          >
            Мои билеты
          </SimpleCell>
          <SimpleCell 
            before={<Icon28WriteSquareOutline />}
            indicator={<Counter>4</Counter>}
            expandable
            multiline
          >
            Мои отзывы
          </SimpleCell>
          <SimpleCell 
            before={<Icon28ListLikeOutline />}
            indicator={<Counter>4</Counter>}
            expandable
            multiline
          >
            Хочу посетить
          </SimpleCell>
          <SimpleCell 
            before={<Icon28CalendarOutline />}
            indicator={<Counter>4</Counter>}
            expandable
            multiline
          >
            Запланировано
          </SimpleCell>
        </List>
      </Group>
      <Footer className="footer">
        <div>Версия 1.0.0</div>
        <div>Сделано с ❤️️ от <Link href="https://vk.com/skyreglis" target="__blank">SkyReglis Studio</Link></div>
      </Footer>
    </>
  );
}

export default withRouter(ProfilePanelBase);