import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";

import {
  ConfigProvider,
  AppRoot,
  SplitLayout,
  PanelHeader,
  SplitCol,
  Epic,
  View,
  Panel,
  ModalRoot,
  ScreenSpinner,
  usePlatform,
  VKCOM,
  withAdaptivity,
} from "@vkontakte/vkui";

import bridge from "@vkontakte/vk-bridge";

import { set } from "./js/reducers/mainReducer";

/* Навигация */
import DesktopNavigation from "./js/components/navigation/desktop";
import MobailNavigation from "./js/components/navigation/mobail";

/* Модальные страницы */
import FilterCategoryModal from "./js/components/modals/filter/filterCategory/FilterCategoryModal";
import FilterMapModal from "./js/components/modals/filter/filterMap/FilterMapModal";
import FilterSearchModal from "./js/components/modals/filter/filterSearch/filterSearch";

import UVIModal from "./js/components/modals/infoBlock/weatherModal/UVIModal/UVIModal";
import DewPointModal from "./js/components/modals/infoBlock/weatherModal/dewPointModal/DewPointModal";
import DateModal from "./js/components/modals/infoBlock/dateModal/DateModal";

/* Панели */
const HomePanel = lazy(() => import("./js/panels/home/base/base"));
const CardCategoryPanel = lazy(() =>
  import("./js/panels/home/cardCategory/cardCategory")
);
const SearchPanel = lazy(() => import("./js/panels/home/search/search"));
const WeatherPanel = lazy(() => import("./js/panels/home/weather/weather"));

const MapPanel = lazy(() => import("./js/panels/map/base/base"));

const ProfilePanel = lazy(() => import("./js/panels/profile/base/base"));

/* Начало кода */
const App = withAdaptivity(
  ({ viewWidth, router }) => {
    const mainStorage = useSelector((state) => state.main);
    const dispatch = useDispatch();

    dispatch(set({ key: "isDesktop", value: viewWidth >= 3 }));
    dispatch(
      set({
        key: "platform",
        value: mainStorage.isDesktop ? VKCOM : usePlatform(),
      })
    );
    dispatch(set({ key: "hasHeader", value: mainStorage.isDesktop !== true }));

    useEffect(() => {
      bridge.subscribe(({ detail: { type, data } }) => {
        if (type === "VKWebAppUpdateConfig") {
          dispatch(
            set({
              key: "theme",
              value: data.scheme === "space_gray" ? "dark" : "light",
            })
          );
        }
      });
    }, []);

    const modals = (
      <ModalRoot activeModal={router.modal} onClose={() => router.toBack()}>
        <FilterMapModal nav="filterMapModal" />
        <FilterCategoryModal nav="filterCategoryModal" />
        <FilterSearchModal nav="filterSearchModal" />
        <UVIModal nav="uviModal" />
        <DewPointModal nav="dewPointModal" />
        <DateModal nav="dateModal" />
      </ModalRoot>
    );

    return (
      <ConfigProvider
        platform={mainStorage.platform}
        appearance={mainStorage.theme}
        isWebView
      >
        <AppRoot>
          <SplitLayout
            header={mainStorage.hasHeader && <PanelHeader separator={false} />}
            style={{ justifyContent: "center" }}
          >
            <SplitCol
              animate={!mainStorage.isDesktop}
              //spaced={mainStorage.isDesktop}
              width={mainStorage.isDesktop ? "740px" : "100%"}
              maxWidth={mainStorage.isDesktop ? "740px" : "100%"}
            >
              <Epic
                activeStory={router.activeView}
                tabbar={!mainStorage.isDesktop && <MobailNavigation />}
              >
                <View
                  id="home"
                  activePanel={
                    router.activePanel === "route_modal"
                      ? "base"
                      : router.activePanel
                  }
                  popout={router.popout}
                  modal={modals}
                >
                  <Panel id="base">
                    <Suspense fallback={<ScreenSpinner />}>
                      <HomePanel />
                    </Suspense>
                  </Panel>
                  <Panel id="cardCategory">
                    <Suspense fallback={<ScreenSpinner />}>
                      <CardCategoryPanel />
                    </Suspense>
                  </Panel>
                  <Panel id="search">
                    <Suspense fallback={<ScreenSpinner />}>
                      <SearchPanel />
                    </Suspense>
                  </Panel>
                  <Panel id="weather">
                    <Suspense fallback={<ScreenSpinner />}>
                      <WeatherPanel />
                    </Suspense>
                  </Panel>
                </View>

                <View
                  id="map"
                  activePanel={
                    router.activePanel === "route_modal"
                      ? "base"
                      : router.activePanel
                  }
                  popout={router.popout}
                  modal={modals}
                >
                  <Panel id="base">
                    <Suspense fallback={<ScreenSpinner />}>
                      <MapPanel />
                    </Suspense>
                  </Panel>
                </View>

                <View
                  id="profile"
                  activePanel={
                    router.activePanel === "route_modal"
                      ? "base"
                      : router.activePanel
                  }
                  popout={router.popout}
                  modal={modals}
                >
                  <Panel id="base">
                    <Suspense fallback={<ScreenSpinner />}>
                      <ProfilePanel />
                    </Suspense>
                  </Panel>
                </View>
              </Epic>
            </SplitCol>

            {mainStorage.isDesktop && <DesktopNavigation />}
          </SplitLayout>
        </AppRoot>
      </ConfigProvider>
    );
  },
  { viewWidth: true }
);

export default withRouter(App);
