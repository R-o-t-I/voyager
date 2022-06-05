import React from 'react';
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import './base.css';

import {
  PanelHeader, 
  PanelHeaderBack, 
  Placeholder,
  Group,
  PanelHeaderButton
} from "@vkontakte/vkui";

import {
  Icon56DiamondOutline
} from '@vkontakte/icons';

function MapPanel({ router }) {
    
  return(
    <>
      <PanelHeader 
        separator={false}
        left={<PanelHeaderButton></PanelHeaderButton>}
      >
        Карта
      </PanelHeader>

      <Group>
        
      </Group>
    </>
  )
}

export default withRouter(MapPanel);