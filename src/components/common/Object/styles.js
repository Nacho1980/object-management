import styled from "styled-components";
import {
  DEFAULT_SPACING,
  LARGE_SPACING,
  DEFAULT_FONT_SIZE,
  TEXT_COLOR
} from "../../../theme";

export const StyledField = styled.div`
  margin-left: ${DEFAULT_SPACING};
  font-size: ${DEFAULT_FONT_SIZE};
  color: ${TEXT_COLOR};
`;

export const EditableObjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-gap: ${LARGE_SPACING};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`
