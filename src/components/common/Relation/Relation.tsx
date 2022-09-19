import { useContext } from "react";
import ItemsContext from "../../../context/itemsContext";
import { getIconForObjectType } from "../../../utils";
import { IRelation } from "../Interface";
import { StyledField, MarginSpan } from "./styles";
/**  
 * Functional component for the relations between objects
 * @author Ignacio
 * @version 1.0.0  
 * @param {string} name - Name of the relation
 * @param {number} obj1Id - First object in the relation
 * @param {number} obj2Id - Second object in the relation
 */

export const Relation = ({name, obj1Id, obj2Id}: IRelation) =>  {
  const {objectList} = useContext(ItemsContext)
  const obj1 = objectList.find(o => o.id === obj1Id)
  const obj2 = objectList.find(o => o.id === obj2Id)
  const obj1TypeIcon = obj1?.type && getIconForObjectType(obj1.type)
  const obj2TypeIcon = obj2?.type && getIconForObjectType(obj2.type)
  return (
  <>
    <StyledField>{name}</StyledField>
    <StyledField>
      <MarginSpan>{obj1TypeIcon}</MarginSpan>
      <MarginSpan>{obj1?.name}</MarginSpan>
    </StyledField>
    <StyledField>
      <MarginSpan>{obj2TypeIcon}</MarginSpan>
      <MarginSpan>{obj2?.name}</MarginSpan>
    </StyledField>
  </>
)}