import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';

import { colors, sizes } from 'src/config/variables';
import { Wrapper } from 'src/common/components/Wrapper';
import { groupForecastListByDate } from 'src/common/helpers/groupforecastListByDate';
import { ForecastItem } from './ForecastItem';
import { breakpoints } from 'src/config/variables';

const { Panel } = Collapse;

const StyledPanel = styled(Panel)`
    width: 310px;
    font-size: 0.7rem;

    .ant-collapse-content-box {
        padding: 0;
    }

    ${breakpoints.md} {
        width: 500px;
        font-size: 0.9rem;
    }
`;

const PreHeader = styled.p`
    font-size: ${sizes.font.normal};
    color: ${colors.primaryText};
`;

const Header = styled.h4`
    color: ${colors.primaryText};
    font-size: ${sizes.font.large};
    font-weight: 800;
`;
export const ForecastInfo = ({ data }) => {
    const groupedByDate = groupForecastListByDate(data.list);

    return (
        <Wrapper>
            <PreHeader>Forecast for</PreHeader>
            <Header>
                {data.city.name}, {data.city.country}
            </Header>
            <Collapse>
                {Object.keys(groupedByDate).map(date => (
                    <StyledPanel key={date} header={date}>
                        {groupedByDate[date].map(item => (
                            <ForecastItem forecast={item} />
                        ))}
                    </StyledPanel>
                ))}
            </Collapse>
        </Wrapper>
    );
};
