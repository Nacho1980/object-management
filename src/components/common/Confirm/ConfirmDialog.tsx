import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

type ConfirmProps = {
  title: string;
  content: string;
  open: boolean;
  setOpen: Function;
  onConfirm: Function;
};

/**
 * List objects and relations
 * @author Ignacio
 * @version 1.0.0
 * @param title title of the dialog
 * @param content the content of the dialog
 * @param open boolean to check to open the dialog
 * @param setOpen action to open
 * @param onConfirm action when confirming
 */
const ConfirmDialog = ({
  title,
  content,
  open,
  setOpen,
  onConfirm,
}: ConfirmProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setOpen(false)}
          color="secondary"
        >
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
