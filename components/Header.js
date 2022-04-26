import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu>
      <Menu.Item>Crowdfunding</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item icon='add'></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
