import styled from "styled-components";
import {
  BORDER_COLOR,
  ERROR_COLOR,
  INPUT_BG_COLOR,
  INPUT_BORDER_RADIUS,
  INPUT_FONT_SIZE,
  INPUT_HEIGHT,
  INPUT_PADDING,
} from "../../../theme";

export const TextInput = styled.input`
  width: 100%;
  height: ${INPUT_HEIGHT};
  font-size: ${INPUT_FONT_SIZE};
  padding: ${INPUT_PADDING};
  background-color: ${INPUT_BG_COLOR};
  border: 1px solid ${(props) => (props.error ? ERROR_COLOR : BORDER_COLOR)};
  border-radius: ${INPUT_BORDER_RADIUS};
  :focus {
    outline: none;
  }
  &#addRelationName {
    min-width: 200px;
  }
`;
