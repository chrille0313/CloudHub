'use client';

import { Button, ButtonProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useFormStatus } from 'react-dom';

export type SubmitButtonProps = PropsWithChildren<ButtonProps>;

export default function SubmitButton({ children, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="contained" loading={pending} {...props}>
      {children}
    </Button>
  );
}
