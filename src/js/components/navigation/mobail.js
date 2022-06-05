import React from 'react';
import { withRouter } from '@reyzitwo/react-router-vkminiapps';

import {
	Tabbar,
	TabbarItem
} from '@vkontakte/vkui';
import {
	Icon28EternalFlameOutline,
	Icon28LocationMapOutline,
	Icon28Profile
} from '@vkontakte/icons';

function MobailNavigation({ router }) {

	function openView(view) {
		let nowView = router.activeView
		router.toView(view)
		
		if (view === nowView) {
		  router.toHash(`${view}/base`)
		}
	}

	return(
	    <Tabbar className="tabbarStyle">
	      <TabbarItem
	        selected={router.activeView === 'home'}
	        onClick={() => openView('home')}
	        text='Места'
	      >
					<Icon28EternalFlameOutline />
				</TabbarItem>

				<TabbarItem
	        selected={router.activeView === 'map'}
	        onClick={() => openView('map')}
	        text='Карта'
	      >
					<Icon28LocationMapOutline />
				</TabbarItem>

	      <TabbarItem
	        data-id='profile'
	        selected={router.activeView === 'profile'}
					onClick={() => openView('profile')}
	        text='Профиль'
	      >
					<Icon28Profile />
				</TabbarItem>
	    </Tabbar>
	)
}

export default withRouter(MobailNavigation);