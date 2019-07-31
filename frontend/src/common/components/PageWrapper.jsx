import styled from 'styled-components';

import { sizes, breakpoints } from 'src/config/variables';

export const PageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: ${sizes.padding.xs};

    ${breakpoints.md} {
        padding: ${sizes.padding.lg};
    }
`;
