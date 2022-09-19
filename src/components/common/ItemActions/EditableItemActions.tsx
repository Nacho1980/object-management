import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { STD_ICON_SIZE, ICON_BG_COLOR, S_ICON_SIZE } from '../../../theme';
import { ActionSpan } from "./styles"

type EditableItemActionsProps = {  
  onAccept: () => void;
  onCancel: () => void;
}
/**
 * Actions that can be performed with every editable item in a list
 *  like accept(save) or cancel changes
 * @author Ignacio
 * @version 1.0.0
 * @param param0 
 * @returns 
 */
export const EditableItemActions = ({onAccept, onCancel}: EditableItemActionsProps) => {
  return (
    <div>
      <ActionSpan><CheckCircleIcon sx={{ fontSize: STD_ICON_SIZE, color: ICON_BG_COLOR, cursor: 'pointer' }} onClick={onAccept} /></ActionSpan>
      <ActionSpan><CancelIcon sx={{ fontSize: STD_ICON_SIZE, color: ICON_BG_COLOR, cursor: 'pointer' }} onClick={onCancel} /></ActionSpan>
    </div>
  )
}