import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Avatar,
} from '@mui/material';

export const CustomDialog = ({
  isOpen,
  handleClose,
  handleExit,
  title,
  buttons,
  avatar,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        <Avatar alt="Remy Sharp" src={avatar} />
        <DialogContentText
          dangerouslySetInnerHTML={{ __html: title }}
        ></DialogContentText>

        {buttons.map((button, index) => {
          return (
            <Button
              key={index}
              color="primary"
              onClick={() => {
                handleClose();
                if (handleExit) {
                  handleExit(index);
                }
              }}
            >
              {button}
            </Button>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string,
  avatar: PropTypes.string,
};
