import styled from "styled-components"

import { theme } from "../../../theme"

export const SidebarTemporaryContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0px;
  right: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: inset 49px 0px 76px rgba(0, 0, 0, 0.159);

  margin-left: 15.25rem;
  display: flex;
  flex-direction: row;

  &.open {
    animation: bgIn 0.3s forwards ease-out;
  }

  &.close {
    animation: bgOut 0.3s forwards ease-out;
  }

  @keyframes bgIn {
    0% {
      left: -16rem;
    }
    100% {
      left: 0;
    }
  }

  @keyframes bgOut {
    0% {
      left: 0;
      opacity: 1;
    }
    100% {
      left: -16rem;
      opacity: 0;
      visibility: hidden;
    }
  }
`

export const SidebarTemporaryContent = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  bottom: 0;
  width: 0;
  width: 15.25rem;
  background: ${theme.bg.bg_linear};

  &.open {
    animation: sidebarPositionAnimateIn 0.3s forwards ease-out;
  }

  &.close {
    animation: sidebarPositionAnimateOut 0.3s forwards ease-out;
  }

  @keyframes sidebarPositionAnimateIn {
    0% {
      left: -16rem;
    }
    100% {
      left: 0;
    }
  }

  @keyframes sidebarPositionAnimateOut {
    0% {
      left: 0;
    }
    100% {
      left: -16rem;
      visibility: hidden;
    }
  }
`
