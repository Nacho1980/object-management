import styled from "styled-components";
import {
  MAIN_BG_COLOR,
  LARGE_SPACING,
  LARGE_FONT,
  TEXT_CONTRAST,
  SECONDARY_BG_COLOR,
  ICON_BG_COLOR
} from "../../theme";

export const HeaderDiv = styled.div`
  margin-bottom: ${LARGE_SPACING};
  background-color: ${MAIN_BG_COLOR};
  padding: ${LARGE_SPACING};
  color: ${TEXT_CONTRAST};
  text-align: center;
`

export const LinkGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const LinkText = styled.span`
  color: ${props => props.current ? ICON_BG_COLOR : SECONDARY_BG_COLOR};
  font-size: ${LARGE_FONT};
  cursor: pointer;
  :hover {
    color: ${TEXT_CONTRAST};
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`
