
import { StyledField, IconWrapper } from './styles';
import { IObject } from '../Interface';
import { getIconForObjectType } from '../../../utils';

/**  
 * Functional component for the objects that will be managed.  
 * @author Ignacio
 * @version 1.0.0  
 * @param {string} name - Name of the object
 * @param {string} description - Description of the object
 * @param {string} type - Type of the object, can only take predefined values
 */

export const Object = ({name, description, type}: IObject) =>  {
  const iconType = getIconForObjectType(type)
  return(
    <>
      <IconWrapper>{iconType}</IconWrapper>
      <StyledField>{name}</StyledField>
      <StyledField>{description}</StyledField>
    </>
  )
}