import styled from "styled-components";
import {
  BUTTON_COLOR,
  BUTTON_FONT_SIZE,
  BUTTON_PADDING,
  DEFAULT_BG_COLOR,
  DEFAULT_FONT_SIZE,
  DEFAULT_SPACING,
  EVEN_ROW_COLOR,
  INPUT_BORDER_RADIUS,
  INPUT_HEIGHT,
  LARGE_SPACING,
  MAIN_BG_COLOR,
  TEXT_COLOR,
  WARN_COLOR,
} from "../../theme";

export const QuickSearchRow = styled.span`
  display: grid;
  grid-template-columns: 1fr 4fr 14fr;
  align-items: flex-start;
`;

export const QuickSearchBoldField = styled.div`
  padding-left: ${LARGE_SPACING};
  font-weight: bold;
  color: ${TEXT_COLOR};
`;

export const QuickSearchField = styled.div`
  padding-left: ${LARGE_SPACING};
  color: ${TEXT_COLOR};
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

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

export const AddObjWrapper = styled.div.attrs({
  className: "add-object-wrapper",
})`
  display: flex;
  flex-direction: row; /* Default to row for larger screens */
  gap: ${LARGE_SPACING};

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column; /* Change to column for smaller screens */
    gap: unset;
  }
`;

export const AddRelWrapper = styled.div.attrs({
  className: "add-rel-wrapper",
})`
  display: flex;
  flex-direction: row; /* Default to row for larger screens */

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column; /* Change to column for smaller screens */
    gap: unset;
  }
`;

export const AddRelSpan = styled.span.attrs({
  className: "add-rel-span",
})`
  margin: 0 ${LARGE_SPACING} 0 ${LARGE_SPACING};
`;

export const SeparatedText = styled.div.attrs({
  className: "separated-text",
})`
  margin-left: ${DEFAULT_SPACING};
`;

export const ListWrapper = styled.div.attrs({
  className: "list-wrapper",
})`
  display: flex;
  flex-direction: column;
  // margin: ${LARGE_SPACING};
  gap: ${DEFAULT_SPACING};
`;

export const ObjectFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 6fr 1fr;
  grid-gap: ${LARGE_SPACING};
`;

export const RelationFieldsWrapper = styled.div.attrs({
  className: "relation'fields-wrapper",
})`
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 1fr;
  grid-gap: ${LARGE_SPACING};
`;

export const AutocompleteWrapper = styled.div.attrs({
  className: "autocomplete-wrapper",
})`
  display: flex;
  flex-direction: column;
  margin: ${DEFAULT_SPACING};
`;

export const ItemCRUDWrapper = styled.div.attrs({
  className: "crud-wrapper",
})`
  margin: ${DEFAULT_SPACING};
  display: flex;
  flex-direction: column;
`;

export const EmptyListWarning = styled.div`
  display: flex;
  align-items: center;
  font-size: ${DEFAULT_FONT_SIZE};
  justify-content: center;
  margin-top: ${LARGE_SPACING};
  color: ${WARN_COLOR};
`;

export const FormField = styled.div.attrs({
  className: "form-field",
})`
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  margin: ${DEFAULT_SPACING};

  > span {
    margin: unset;
    margin-right: ${DEFAULT_SPACING};
  }
`;

export const Row = styled.div.attrs({
  className: "row",
})`
  display: flex;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.even ? EVEN_ROW_COLOR : DEFAULT_BG_COLOR};
`;

export const SearchResultWrapper = styled.div.attrs({
  className: "search-result-wrapper",
})`
  margin-top: ${LARGE_SPACING};
  display: grid;
  grid-template-columns: 2fr 2fr 6fr;
  grid-gap: ${LARGE_SPACING};
`;
