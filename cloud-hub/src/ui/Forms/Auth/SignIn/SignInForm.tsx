'use client';

import { signInUserAction } from '@/components/User/actions';
import Grid from '@mui/material/Grid2';
import { Alert, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Form from 'next/form';
import SubmitButton from '@/ui/Forms/SubmitButton';
import { useActionState } from 'react';

export default function SignInForm() {
  const [state, formAction] = useActionState(signInUserAction, undefined);

  return (
    <Stack gap={3}>
      {state?.errors?._errors.map((error) => (
        <Alert severity="error" key={error}>
          {error}
        </Alert>
      ))}
      <Form action={formAction} autoComplete="off">
        <Grid container spacing={2}>
          <Grid size="grow">
            <TextField
              name="email"
              label="Email Adress"
              autoComplete="email"
              required
              autoFocus
              fullWidth
              defaultValue={state?.data.email}
              error={state?.errors?.email !== undefined}
              helperText={state?.errors?.email?._errors.join(', ')}
            />
          </Grid>
          <Grid container size={12}>
            <Grid size="grow">
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                fullWidth
                defaultValue={state?.data.password}
                error={state?.errors?.password !== undefined}
                helperText={state?.errors?.password?._errors.join(', ')}
              />
            </Grid>
            <Grid size={12}>
              <SubmitButton endIcon={<SendIcon />} fullWidth>
                Sign In
              </SubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );
}
