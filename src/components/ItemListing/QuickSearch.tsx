import { IObject } from "../common/Interface";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { getIconForObjectType } from "../../utils";
import {
  AutocompleteWrapper,
  QuickSearchRow,
  QuickSearchBoldField,
  QuickSearchField,
  SearchResultWrapper,
  EmptyListWarning,
  SeparatedText,
} from "./styles";
import { useState } from "react";
import { Object } from "../common/Object/Obj";
import { Link } from "react-router-dom";

interface IQuickSearch {
  list: Array<IObject>;
}

// Search by multiple fields, in this case name and description
const filterOptions = createFilterOptions({
  matchFrom: "any",
  stringify: (option: any) => option.name + option.description,
});
/**
 * Performs a quick search on a list of objects, using MUI's Autocomplete
 * @author Ignacio
 * @version 1.0.0
 * @param list of objects
 */
export const QuickSearch = ({ list }: IQuickSearch) => {
  const [value, setValue] = useState(list[0])
  return (
    <AutocompleteWrapper>
      <Autocomplete
        id="autocomplete-search"
        defaultValue={value}
        disabled={!list || list.length === 0}
        options={list}
        value={value}
        filterOptions={filterOptions}
        getOptionLabel={(obj) => obj.name}
        onChange={(event: any, newValue:IObject) => {
          setValue(newValue);
        }}
        renderOption={(props: any, option: any) => (
          <QuickSearchRow key={option.id}  {...props}>
            <QuickSearchField>
              {getIconForObjectType(option.type)}
            </QuickSearchField>
            <QuickSearchBoldField>{option.name}</QuickSearchBoldField>
            <QuickSearchField>{option.description}</QuickSearchField>
          </QuickSearchRow>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Object search"/>
        )}
      />
      <SearchResultWrapper>
        {value && (<Object
          id={value.id}
          name={value.name}
          description={value.description}
          type={value.type}
        />)}
      </SearchResultWrapper>
      {(!list || (list.length === 0)) && <EmptyListWarning>
          No objects, to create a new one navigate to the 
          <SeparatedText><Link to="/objects" style={{ textDecoration: "none" }}> Objects page </Link></SeparatedText>
        </EmptyListWarning>}
    </AutocompleteWrapper>
  );
};
