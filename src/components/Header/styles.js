import styled from "styled-components";
import {
  DEFAULT_SPACING,
  ICON_BG_COLOR,
  LARGE_FONT,
  LARGE_SPACING,
  MAIN_BG_COLOR,
  SECONDARY_BG_COLOR,
  TEXT_CONTRAST,
} from "../../theme";

export const TitleWrapper = styled.div.attrs({
  className: "title-wrapper",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  h1 {
    width: 100%;
    margin-bottom: 2rem;
    padding: 0;
    text-align: center;
  }
`;

export const HeaderDiv = styled.div.attrs({
  className: "header-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-wrap: wrap;
  margin-bottom: ${DEFAULT_SPACING};
  background-color: ${MAIN_BG_COLOR};
  padding: ${LARGE_SPACING};
  color: ${TEXT_CONTRAST};

  nav {
    display: flex;
    width: 100%;
  }
`;

export const LinkGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LinkText = styled.span`
  color: ${(props) => (props.current ? ICON_BG_COLOR : SECONDARY_BG_COLOR)};
  font-size: ${LARGE_FONT};
  cursor: pointer;
  :hover {
    color: ${TEXT_CONTRAST};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
