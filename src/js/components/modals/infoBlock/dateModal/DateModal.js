import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  IOS,
  ANDROID,
  FormItem,
  LocaleProviderContext,
  Calendar,
  Placeholder,
  SimpleCell,
  Avatar,
} from "@vkontakte/vkui";

import style from "./dateModal.module.scss";

import { Icon24DismissDark, Icon28MortarOutline } from "@vkontakte/icons";

const axios = require('axios');

const months_list = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря"
];

function DateModal({ nav, router }) {
  const platform = useSelector((state) => state.main.platform);
  const mainStorage = useSelector((state) => state.main);
  const [value, setValue] = useState(new Date());
  const [enableTime, setEnableTime] = useState(false);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(true);
  const [locale, setLocale] = useState("ru");
  const [size, setSize] = useState("m");
  const [date, setDate] = useState({});
  const [todayInfo, setTodayInfo] = useState("");
  const [result, setResult] = useState(false)

  useEffect(() => {
    if(!result) {
      setDate(getDate());
      //console.log(todayInfo.title);
      getTodayInfo();
      setResult(true);
    }
  });

  function getDate() {
    let date = new Date();
    let month = Number(date.getMonth());
    month = months_list[month].toLowerCase();
    return {date: date.getDate(), month: month, year: date.getFullYear()};
  }

  function getTodayInfo() {
    let day = new Date();
    let month = Number(day.getMonth());

    axios.get(`https://dates.gate.petersburg.ru/memorable_dates/date/day/${day.getDate()}/month/${month}`, {
      headers: {
        Authorization: mainStorage.Authorization_token
      }
    })
    .then(res => {
      res.data[0].date = new Date(res.data[0].date).toLocaleDateString()
      setTodayInfo(res.data[0]);
    });
  }

  function changeDate(e) {
    setValue(e);

  }

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
          Календарь
        </ModalPageHeader>
      }
      onClose={() => router.toBack()}
      settlingHeight={100}
    >
      <div className={style.topBlock}>
        <div className={style.todaysDate}>Сегодня {date.date} {date.month} {date.year} года</div>
        <div className={style.event}>
        {todayInfo.date} {todayInfo.title}
        </div>
      </div>
      <FormItem>
        <LocaleProviderContext.Provider value={locale}>
          <Calendar
            className={style.calendarSize}
            value={value}
            onChange={(e) => changeDate(e)}
            enableTime={enableTime}
            disablePast={disablePast}
            disableFuture={disableFuture}
            disablePickers={disablePickers}
            showNeighboringMonth={showNeighboringMonth}
            size={size}
          />
        </LocaleProviderContext.Provider>
      </FormItem>
      <div className={style.bottomBlock}>
        <div className={style.plansTodays}>
          <div className={style.plansTodaysTitle}>Планы на сегодня:</div>
          <div className={style.plansTodaysBlock}>
            <div className={style.plansTodaysContent}>
              <Placeholder>У Вас нет планов на сегодня</Placeholder>
            </div>
          </div>
        </div>
        <div className={style.immediatePlans}>
          <div className={style.immediatePlansTitle}>Ближайшие планы:</div>
          <div className={style.immediatePlansBlock}>
            <div className={style.immediatePlansContent}>
              <SimpleCell
                expandable
                multiline
                before={
                  <Avatar
                    overlayAction="always"
                    overlayIcon={<Icon28MortarOutline />}
                    mode="image"
                    size={48}
                    src=""
                  />
                }
                after={""}
                description="23 июля 2022 года в 16:00"
              >
                Посещение ресторана "Васельки"
              </SimpleCell>
              <SimpleCell
                expandable
                multiline
                before={
                  <Avatar
                    overlayAction="always"
                    overlayIcon={<Icon28MortarOutline />}
                    mode="image"
                    size={48}
                    src=""
                  />
                }
                after={""}
                description="23 июля 2022 года в 16:00"
              >
                Посещение ресторана "Васильки"
              </SimpleCell>
            </div>
          </div>
        </div>
      </div>
    </ModalPage>
  );
}

export default withRouter(DateModal);
