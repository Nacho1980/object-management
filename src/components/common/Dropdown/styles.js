import styled from "styled-components";
import {
  SELECT_FONT_SIZE,
  SELECT_BG_COLOR,
  SELECT_HEIGHT,
  SELECT_PADDING,
  BORDER_COLOR,
  INPUT_BORDER_RADIUS
} from "../../../theme";

export const StyledSelect = styled.select`
  font-size: ${SELECT_FONT_SIZE};
  border-radius: ${INPUT_BORDER_RADIUS};
  border: 1px solid ${BORDER_COLOR};
  height: ${SELECT_HEIGHT};
  padding: ${SELECT_PADDING};
  background-color: ${SELECT_BG_COLOR};
  :focus{ outline: none;}
`;

export const ShortStyledSelect = styled(StyledSelect)`
  width: 270px;
`;
