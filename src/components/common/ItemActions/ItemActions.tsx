import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { S_ICON_SIZE, ICON_BG_COLOR } from '../../../theme';
import { ActionSpan } from "./styles"
import { useContext } from 'react';
import ItemsContext from '../../../context/itemsContext';

type ItemActionsProps = {
  itemType: string;
  itemId: number;
  onEdit: () => void;
}

/**
 * Actions that can be performed with every item in a list
 *  like edit or delete
 * @author Ignacio
 * @version 1.0.0
 * @param itemType the type of item (object or relation)
 * @param itemId the id of item
 * @param onEdit the action to perform to access edit mode
 * @returns 
 */
export const ItemActions = ({itemType, itemId, onEdit}: ItemActionsProps) => {
  const isObject = itemType === 'object'
  const {
    deleteObject,
    deleteRelation,
  } = useContext(ItemsContext);

  const onDelete = () => {
    // This dialog can be improved with React + MUI
    const confirmed = window.confirm("Are you sure you want to delete?")
    if (confirmed && isObject) { 
      deleteObject(itemId)
    } else if (confirmed) {
      deleteRelation(itemId)
    }
  }

  return (
    <div>
      <ActionSpan><EditIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR, cursor: 'pointer' }} onClick={onEdit} /></ActionSpan>
      <ActionSpan><DeleteIcon sx={{ fontSize: S_ICON_SIZE, color: ICON_BG_COLOR, cursor: 'pointer' }} onClick={onDelete} /></ActionSpan>
    </div>
  )
}