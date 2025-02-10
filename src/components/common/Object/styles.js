import styled from "styled-components";
import {
  DEFAULT_FONT_SIZE,
  DEFAULT_SPACING,
  LARGE_SPACING,
  TEXT_COLOR,
} from "../../../theme";
export const StyledField = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  // margin-left: ${DEFAULT_SPACING};
  font-size: ${DEFAULT_FONT_SIZE};
  color: ${TEXT_COLOR};
`;

export const FlexSpan = styled.span`
  display: flex;
  flex: 1;
`;
export const StyledFieldObj = styled.div.attrs({
  className: "styled-field",
})`
  // margin-left: ${DEFAULT_SPACING};
  font-size: ${DEFAULT_FONT_SIZE};
  color: ${TEXT_COLOR};
`;

export const EditableObjectWrapper = styled.div.attrs({
  className: "editable-object-wrapper",
})`
  display: grid;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-gap: ${LARGE_SPACING};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0;
`;
