import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    height: 56rem;
    margin-top: 2rem;
    padding-right: 4rem;
    overflow-y: scroll;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-right: 1.2rem;
    }
`