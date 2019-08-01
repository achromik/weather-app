import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { WeatherItem } from 'src/components/weathersList/WeatherItem';
const List = styled.ul`
    margin: 0;
    padding: 10px;
    width: 320px;
    list-style-type: none;
`;

export const WeathersList = ({ list }) => (
    <List>
        {list.map(item => (
            <WeatherItem key={item.id} data={item} />
        ))}
    </List>
);

const mapStateToProps = state => ({
    list: state.weathersList.data.list,
});

export default connect(mapStateToProps)(WeathersList);
