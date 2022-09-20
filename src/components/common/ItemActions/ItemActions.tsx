import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { S_ICON_SIZE, ICON_BG_COLOR } from "../../../theme";
import { ActionSpan } from "./styles";
import { useContext, useState } from "react";
import ItemsContext from "../../../context/itemsContext";
import ConfirmDialog from "../Confirm/ConfirmDialog";

type ItemActionsProps = {
  itemName: string;
  itemType: string;
  itemId: number;
  onEdit: () => void;
};

/**
 * Actions that can be performed with every item in a list
 *  like edit or delete (delete shows a confirmation dialog)
 * @author Ignacio
 * @version 1.0.0
 * @param itemType the type of item (object or relation)
 * @param itemId the id of item
 * @param onEdit the action to perform to access edit mode
 * @returns
 */
export const ItemActions = ({ itemName, itemType, itemId, onEdit }: ItemActionsProps) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const isObject = itemType === "object";
  const { deleteObject, deleteRelation } = useContext(ItemsContext);

  const onDelete = () => {
    if (isObject) {
      deleteObject(itemId);
    } else {
      deleteRelation(itemId);
    }
  };

  return (
    <div>
      <ConfirmDialog
        title="Confirm"
        content={`Are you sure you want to delete ${itemName}?`}
        open={openConfirm}
        setOpen={setOpenConfirm}
        onConfirm={onDelete}
      />
      <ActionSpan>
        <EditIcon
          sx={{
            fontSize: S_ICON_SIZE,
            color: ICON_BG_COLOR,
            cursor: "pointer",
          }}
          onClick={onEdit}
        />
      </ActionSpan>
      <ActionSpan>
        <DeleteIcon
          sx={{
            fontSize: S_ICON_SIZE,
            color: ICON_BG_COLOR,
            cursor: "pointer",
          }}
          onClick={() => setOpenConfirm(true)}
        />
      </ActionSpan>
    </div>
  );
};
