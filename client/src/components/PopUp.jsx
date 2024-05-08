import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

const PopupForm = ({ id, name, status }) => {
  const [open, setOpen] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedStatus, setEditedStatus] = useState(status);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setEditedStatus(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}><ModeOutlinedIcon/></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form Title</DialogTitle>
        <DialogContent >
          <TextField label="Task" value={editedName} onChange={handleNameChange} variant="outlined" fullWidth />
          {/* <TextField label="Status" value={editedStatus} onChange={handleStatusChange} variant="outlined" fullWidth /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupForm;