import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  width: 40rem;

  .line {
    position: absolute;
    width: 100%;
    height: .1rem;
    border-radius: 1px;
    background: linear-gradient(145deg, #5dcfc9, #3d73a3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .sub-container {
    width: 100%;
    height: 100vh;
    border-right: var(--border-color);
    font-size: 1.5rem;
    padding: 2rem 1.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .button-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    .button-language {
      font-family: 'Roboto', sans-serif;

      color: white;
      background: none;
      border: none;

      font-size: 1.4rem;
      font-weight: bold;

      .color-brazil {
        background: linear-gradient(to right, #009b3a, #ffdf00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .color-eua {
        background: linear-gradient(to right, #3c3b6e, #ffffff, #b22234);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    position: absolute;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    
    &[data-menu-is-open="true"] {
      width: 100%;
      background: var(--bg-color2);
      transform: translateX(0);
    }

    &[data-menu-is-open="false"] {
      background: var(--bg-color2);
    }
  }
`

// export const ButtonToggleMode = styled.button`
//   width: 3.6rem;
//   height: 3.6rem;
//   cursor: pointer;
  
//   background: none;  
//   border: none;
//   /* border: 1px solid rgb(75 85 99); */
//   /* border-radius: .4rem; */  
//   svg {  
//     color: var(--text-color1);
//     font-size: 2.0rem;
//   }
// `

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const Nav = styled.nav`
  width: 100%;

    ul {
      padding-left: .6rem;
      list-style: none;

      li span {
        color: var(--text-color1);
      }
    }

    .link, a {
      color: var(--text-color1);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: .9rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
      margin-bottom: .2rem;
      .icon-color {
        color: var(--icon-menu-color);
      }
    }

    
    .link:hover, a:hover {
      background: var(--link-hover-active-focus);
      border-radius: .6rem;
    }

    .link.active, .link:focus {
      background: var(--link-hover-active-focus);
      border-radius: .6rem;
    }
    .arrow {
      color: var(--icon-arrow-color);
      display: flex;
      gap: 20rem;
      margin-left: auto;
    }
`

export const TitleSection = styled.h5`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 1.5rem;

  &:nth-of-type(2) {
    margin-top: 4rem;
  }
`;

// export const Crawler = styled.div`
//   width: 300px;
//   overflow: hidden;
//   white-space: nowrap;
//   position: relative;
//   margin-top: auto;
//   margin-inline: auto;
//   padding-bottom: 2rem;

//   .crawler-icons {
//     display: inline-block;
//     white-space: nowrap;
//     animation: crawler 15s linear infinite;
//   }

//   @keyframes crawler {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }

//   .crawler-icons > * {
//     display: inline-block;
//     margin-right: 2rem;
//     font-size: 4rem;
//     color: var(--icon-color);
//   }


// `