import styled from 'styled-components';
import { breakpoints } from 'src/config/variables';

export const SectionWrapper = styled.section`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${breakpoints.md} {
        margin: 1rem 1rem;
    }
`;
