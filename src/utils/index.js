import { useState } from 'react';

var setIsOpen, setTitle, setButtons, setAvatar, setHandleExit;
export var showInteractiveHelp;

export function Initialize() {
  var isOpen, title, buttons, avatar, handleExit;

  [isOpen, setIsOpen] = useState(false);
  [title, setTitle] = useState('');
  [buttons, setButtons] = useState([]);
  [avatar, setAvatar] = useState('');
  [handleExit, setHandleExit] = useState(null);

  return {
    isOpen,
    handleClose: () => {
      setIsOpen(false);
      setButtons('');
    },
    handleExit,
    title,
    buttons,
    avatar,
  };
}

export function showDialog(title, buttons, avatar, callback) {
  setTitle(title);
  setIsOpen(true);
  console.log('avatar', avatar);
  avatar && setAvatar(avatar);
  buttons && setButtons(buttons);
  setHandleExit(callback ? () => callback : null);
}
