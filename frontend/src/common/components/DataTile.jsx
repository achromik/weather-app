import React from 'react';
import styled from 'styled-components';

import { colors } from 'src/config/variables';

const Tile = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${colors.blue};
    border-radius: 5px;
    margin: 3px;
    padding: 5px 10px;
    flex-wrap: wrap;
    max-width: 150px;
    color: ${({ bgColor }) => (bgColor ? colors.primaryText : colors.primary)};
    background-color: ${({ bgColor }) => bgColor || '#eee'};
`;

const DataName = styled.p`
    font-size: 0.7rem;
    margin: 0;
    line-height: 1.25rem;
`;

const Value = styled.p`
    font-size: 2rem;
    text-align: center;
    margin: 0;
    font-weight: 800;
`;

const DataUnit = styled.p`
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    text-align: right;
`;

export const DataTile = ({ name, value, unit, bgColor }) => (
    <Tile bgColor={bgColor}>
        <DataName>{name}</DataName>
        <Value>{value}</Value>
        <DataUnit>{unit}</DataUnit>
    </Tile>
);
