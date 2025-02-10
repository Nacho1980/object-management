import { getIconForObjectType } from "../../../utils";
import { IObject } from "../Interface";
import { FlexSpan, IconWrapper, StyledField } from "./styles";

/**
 * Functional component for the objects that will be managed.
 * @author Ignacio
 * @version 1.0.0
 * @param {string} name - Name of the object
 * @param {string} description - Description of the object
 * @param {string} type - Type of the object, can only take predefined values
 */

export const Object = ({ dataTestId, name, description, type }: IObject) => {
  const iconType = getIconForObjectType(type);
  return (
    <>
      <IconWrapper data-testid={`${dataTestId}-icon`}>{iconType}</IconWrapper>
      <StyledField data-testid={`${dataTestId}-name`}>
        <FlexSpan>{name}</FlexSpan>
      </StyledField>
      <StyledField data-testid={`${dataTestId}-description`}>
        <FlexSpan>{description}</FlexSpan>
      </StyledField>
    </>
  );
};
