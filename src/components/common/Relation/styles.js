import styled from "styled-components";
import {
  DEFAULT_SPACING,
  DEFAULT_FONT_SIZE,
  TEXT_COLOR,
  LARGE_SPACING,
} from "../../../theme";

export const StyledField = styled.div`
  display: flex;
  justify-content: center;
  margin-left: ${DEFAULT_SPACING};
  font-size: ${DEFAULT_FONT_SIZE};
  color: ${TEXT_COLOR};
`;

export const MarginSpan = styled.span`
  margin-left: ${DEFAULT_SPACING};
`;

export const EditableRelationWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 1fr;
  grid-gap: ${LARGE_SPACING};
`;