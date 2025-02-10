/**
 * Styled component for select
 */

import { elypsis } from "../../../utils";
import { IObject } from "../Interface";
import { StyledSelect } from "./styles";

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  id: string;
  value: string;
  onChange: Function;
  options: Array<DropdownItem>;
};

/**
 * Simple dropdown, only contains options with text
 * @author Ignacio
 * @version 1.0.0
 * @param value Selected value
 * @param onChange Function executed when the value changes
 * @param options Available options
 * @returns
 */
export const Dropdown = ({ id, value, onChange, options }: DropdownProps) => {
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };
  return (
    <StyledSelect id={id} value={value} onChange={selectChange}>
      {options.map((item, index) => (
        <option key={`${id}-opt${index}`} value={item.value}>
          {item.label}
        </option>
      ))}
    </StyledSelect>
  );
};

type ObjectDropdownProps = {
  id: string;
  value: number;
  onChange: Function;
  objectArray: Array<IObject>;
};

const MAX_LENGTH_OBJECT_NAME_DROPDOWN = 30;
/**
 * Object dropdown, contains options with text and icon for the type
 * @param value Selected value
 * @param onChange Function executed when the value changes
 * @param options Available options
 * @returns
 */
export const ObjectDropdown = ({
  id,
  value,
  onChange,
  objectArray,
}: ObjectDropdownProps) => {
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    onChange(newValue);
  };
  return (
    <StyledSelect id={id} value={value} onChange={selectChange}>
      {objectArray.map((obj, index) => (
        <option key={`${id}-opt${index}`} value={obj.id}>
          {elypsis(obj.name, MAX_LENGTH_OBJECT_NAME_DROPDOWN)}
        </option>
      ))}
    </StyledSelect>
  );
};
