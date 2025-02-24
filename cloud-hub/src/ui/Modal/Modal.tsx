'use client';

import { Dialog, DialogContent, DialogProps, DialogTitle, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';

export interface ModalProps extends Omit<DialogProps, 'open'> {
  title?: string;
}

export default function Modal({ title, children, ...props }: ModalProps) {
  const router = useRouter();

  function handleClose() {
    router.back();
  }

  return (
    <Dialog open={true} onClose={handleClose} {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
}
