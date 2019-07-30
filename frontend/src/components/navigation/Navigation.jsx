import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { sites } from 'src/config/sites';

export const Navigation = () => (
    <Menu mode="horizontal">
        {sites.map(site => (
            <Menu.Item key={site.name}>
                <Icon type={site.icon} theme="twoTone" />
                {site.name}
                <Link to={site.path} />
            </Menu.Item>
        ))}
    </Menu>
);
