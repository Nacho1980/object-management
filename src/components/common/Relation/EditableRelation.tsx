import { useState, useContext } from "react";
import ItemsContext from "../../../context/itemsContext";
import { BORDER_COLOR } from "../../../theme";
import { ObjectDropdown } from "../Dropdown/Dropdown";
import { IEditableRelation } from "../Interface";
import { EditableItemActions } from "../ItemActions/EditableItemActions";
import { TextInput } from "../TextInput/TextInput";
import { EditableRelationWrapper, StyledField } from "./styles";
/**  
 * Relation that can be edited after clicking edit in the CRUD list 
 * @author Ignacio
 * @version 1.0.0  
 * @param {string} name - Name of the relation
 * @param {string} obj1Id - First object in the relation
 * @param {string} obj2Id - Second object in the relation
 * @param {Function} onAccept - Function to accept the changes
 * @param {Function} onCancel - Function to cancel the changes
 */

export const EditableRelation = ({id, dataTestId, name, obj1Id, obj2Id, onAccept, onCancel}: IEditableRelation) =>  {
  const {
    editRelation,
    objectList
  } = useContext(ItemsContext);
  const [relationName, setRelationName] = useState(name)
  const [selectedObj1, setSelectedObj1] = useState(obj1Id)
  const [selectedObj2, setSelectedObj2] = useState(obj2Id)

  const onEdit = () => {
    editRelation({id:id, name: relationName, obj1Id: selectedObj1, obj2Id: selectedObj2})
    onAccept()
  }

  return (
    <EditableRelationWrapper>
      <StyledField>
        <TextInput
          id={"editRelationName"}
          data-testid={`${dataTestId}-name`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRelationName(e.target.value)}
          value={relationName}
          placeholder={'Relation name'}
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
        <ObjectDropdown
          id={'editRelationObj1'}
          data-testid={`${dataTestId}-obj1`}
          value={selectedObj1}
          onChange={setSelectedObj1}
          objectArray={objectList}
        />
      </StyledField>
      <StyledField>
        <ObjectDropdown
          id={'editRelationObj2'}
          data-testid={`${dataTestId}-obj2`}
          value={selectedObj2}
          onChange={setSelectedObj2}
          objectArray={objectList}
        />
      </StyledField>
      
      <EditableItemActions onAccept={onEdit} onCancel={onCancel} />
  </EditableRelationWrapper>
)}