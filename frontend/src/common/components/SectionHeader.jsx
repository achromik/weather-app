import styled from 'styled-components';
import { colors, sizes, breakpoints } from 'src/config/variables';

export const SectionHeader = styled.h2`
    color: ${colors.primaryText};
    font-size: ${sizes.font.large};
    font-weight: 700;

    ${breakpoints.md} {
        font-size: ${sizes.font.big};
    }
`;
