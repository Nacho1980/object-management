import { EditableObjectWrapper, StyledField } from './styles';
import { IEditableObject } from '../Interface';
import { objectTypes } from "../../../utils";
import { TextInput } from '../TextInput/TextInput';
import { Dropdown } from '../Dropdown/Dropdown';
import { useContext, useState } from 'react';
import { BORDER_COLOR } from '../../../theme';
import { EditableItemActions } from '../ItemActions/EditableItemActions';
import ItemsContext from '../../../context/itemsContext';

/**  
 * Object that can be edited after clicking edit in the CRUD list
 * @author Ignacio
 * @version 1.0.0  
 * @param {number} id - ID of the object
 * @param {string} name - Name of the object
 * @param {string} description - Description of the object
 * @param {string} type - Type of the object, can only take predefined values
 * @param {Function} onAccept - Function to accept the changes
 * @param {Function} onCancel - Function to cancel the changes
 */
export const EditableObject = ({id, dataTestId, name, description, type, onAccept, onCancel}: IEditableObject) =>  {
  const {
    editObject
  } = useContext(ItemsContext);
  const [objectType, setObjectType] = useState(type)
  const [objectName, setObjectName] = useState(name)
  const [objectDescription, setObjectDescription] = useState(description)
  const objectTypeOptions = objectTypes.map((type) => {
    return {
      label: type,
      value: type,
    }
  })
  const onEdit = () => {
    editObject({id:id, name: objectName, type: objectType, description: objectDescription})
    onAccept()
  }
  return(
    <EditableObjectWrapper>
      <div>
        <Dropdown
          id={'editObjectType'}
          data-testid={`${dataTestId}-type`}
          value={objectType}
          onChange={setObjectType}
          options={objectTypeOptions}
        />
      </div>
      <StyledField>
        <TextInput
            id={"editObjectName"}
            data-testid={`${dataTestId}-name`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setObjectName(e.target.value)}
            placeholder={'Object name'}
            value={objectName}
            type="text"
            size="small"
            sx={{
              "& fieldset": { borderRadius: "0px" },
              ":hover": {
                border: "1px solid " + BORDER_COLOR,
                borderRadius: "0px",
              },
            }}
          />
      </StyledField>
      <StyledField>
        <TextInput
            id={"editObjectDescription"}
            data-testid={`${dataTestId}-description`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setObjectDescription(e.target.value)}
            value={objectDescription}
            placeholder={'Object description'}
            type="text"
            size="small"
            sx={{
              "& fieldset": { borderRadius: "0px" },
              ":hover": {
                border: "1px solid " + BORDER_COLOR,
                borderRadius: "0px",
              },
            }}
          />
      </StyledField>
      <EditableItemActions onAccept={onEdit} onCancel={onCancel} />
    </EditableObjectWrapper>
  )
}