import styled from "styled-components";
import {
  BORDER_COLOR,
  INPUT_BORDER_RADIUS,
  SELECT_BG_COLOR,
  SELECT_FONT_SIZE,
  SELECT_HEIGHT,
  SELECT_PADDING,
} from "../../../theme";

export const StyledSelect = styled.select.attrs({
  className: "styled-select",
})`
  font-size: ${SELECT_FONT_SIZE};
  border-radius: ${INPUT_BORDER_RADIUS};
  border: 1px solid ${BORDER_COLOR};
  height: ${SELECT_HEIGHT};
  padding: ${SELECT_PADDING};
  background-color: ${SELECT_BG_COLOR};
  :focus {
    outline: none;
  }
  /* Media query for mobile devices */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ShortStyledSelect = styled(StyledSelect)`
  width: 270px;
`;
