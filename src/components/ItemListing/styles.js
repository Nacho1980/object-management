import styled from "styled-components";
import {
  LARGE_SPACING,
  DEFAULT_SPACING,
  INPUT_BORDER_RADIUS,
  WARN_COLOR,
  INPUT_HEIGHT,
  BUTTON_PADDING,
  BUTTON_FONT_SIZE,
  BUTTON_COLOR,
  MAIN_BG_COLOR,
  DEFAULT_FONT_SIZE,
  EVEN_ROW_COLOR,
  DEFAULT_BG_COLOR,
  TEXT_COLOR
} from "../../theme";

export const QuickSearchRow = styled.span`
  display: grid;
  grid-template-columns: 1fr 4fr 14fr;
  align-items: flex-start;
`  

export const QuickSearchBoldField = styled.div`
  padding-left: ${LARGE_SPACING};
  font-weight: bold;
  color: ${TEXT_COLOR};
`

export const QuickSearchField = styled.div`
  padding-left: ${LARGE_SPACING};
  color: ${TEXT_COLOR};
`

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
`

export const AddButton = styled.button`
  padding: ${BUTTON_PADDING};
  //height: ${INPUT_HEIGHT};
  border: none;
  font-size: ${BUTTON_FONT_SIZE};
  text-align: center;
  color: ${BUTTON_COLOR};
  background-color: ${MAIN_BG_COLOR};
  border-radius: ${INPUT_BORDER_RADIUS};
  cursor: pointer;
`;

export const AddObjWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 6fr 1fr;
  grid-gap: ${LARGE_SPACING};
`

export const AddRelWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr 1fr;
  grid-gap: ${LARGE_SPACING};
`

export const AddRelSpan = styled.span`
  margin: 0 ${LARGE_SPACING} 0 ${LARGE_SPACING};
`

export const ListWrapper = styled.div`
  margin: ${LARGE_SPACING};
`

export const ObjectFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 6fr 1fr;
  grid-gap: ${LARGE_SPACING};
`

export const RelationFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 1fr;
  grid-gap: ${LARGE_SPACING};
`

export const AutocompleteWrapper = styled.div`
  margin: ${LARGE_SPACING};
`

export const ItemCRUDWrapper = styled.div`
  margin: ${LARGE_SPACING};
`

export const EmptyListWarning = styled.div`
  display: flex;
  align-items: center;
  font-size: ${DEFAULT_FONT_SIZE};
  justify-content: center;
  margin-top: ${LARGE_SPACING};
  color: ${WARN_COLOR};
`

export const FormField = styled.div`
  margin: ${LARGE_SPACING};
  height: ${INPUT_HEIGHT};
  width: 100%;
`

export const Row = styled.div`
  padding: ${DEFAULT_SPACING};
  background-color: ${props => props.even ? EVEN_ROW_COLOR : DEFAULT_BG_COLOR};
`

export const SearchResultWrapper = styled.div`
  margin-top: ${LARGE_SPACING};
  display: grid;
  grid-template-columns: 2fr 2fr 6fr;
  grid-gap: ${LARGE_SPACING};
`;
