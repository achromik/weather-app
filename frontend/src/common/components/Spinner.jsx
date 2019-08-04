import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

import { colors, sizes } from 'src/config/variables';

const Wrapper = styled.div`
    margin-top: 80px;
    height: 200px;
    width: 250px;
    color: ${colors.primaryText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledIcon = styled(Icon)`
    font-size: 80px;
`;

const Description = styled.p`
    font-size: ${sizes.font.large};
`;
export const Spinner = () => (
    <Wrapper>
        <StyledIcon type="loading" />
        <Description>Loading data...</Description>
    </Wrapper>
);
