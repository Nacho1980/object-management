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
export const MarginSpan = styled.span`
  margin-left: ${DEFAULT_SPACING};
  flex: 1;
`;
export const IconSpan = styled.span`
  margin-left: ${DEFAULT_SPACING};
  flex: 0;
`;

export const EditableRelationWrapper = styled.div.attrs({
  className: "editable-relation-wrapper",
})`
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 1fr;
  grid-gap: ${LARGE_SPACING};
`;
