import { AddItemForm } from "./AddItemForm"
import { ItemsList } from "./ItemsList";
import { ItemCRUDWrapper } from "./styles";


type CRUDProps = {
  itemType: string;
}

/**
 * Manage the CRUD of objects and relations (add, list, edit, delete)
 * @author Ignacio
 * @version 1.0.0
 * @param itemType the type of item (object or relation)
 * 
 * @returns 
 */
export const ItemCRUD = ({itemType}: CRUDProps) =>  {
  return(
    <ItemCRUDWrapper>
      <AddItemForm itemType={itemType}/>
      <ItemsList itemType={itemType}/>
    </ItemCRUDWrapper>
  )
}