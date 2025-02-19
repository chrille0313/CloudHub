'use client';

import { Dialog, DialogContent, DialogProps, DialogTitle } from '@mui/material';

export interface ModalProps extends Omit<DialogProps, 'open'> {
  title?: string;
}

export default function Modal({ title, children, ...props }: ModalProps) {
  // const router = useRouter();

  function handleClose() {
    // router.back();
  }

  return (
    <Dialog open={true} onClose={handleClose} {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
