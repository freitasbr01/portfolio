import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    border: 1px solid red;
    max-width: 130rem;
    max-height: 60rem;
    padding-right: 4rem;
    overflow-y: auto;
    box-sizing: border-box;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding-right: 1.2rem;
    }
`