'use client';

import { signUpUserAction } from '@/components/User/actions';
import Grid from '@mui/material/Grid2';
import { Alert, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Form from 'next/form';
import SubmitButton from '@/ui/Forms/SubmitButton';
import { useActionState } from 'react';

export default function SignUpForm() {
  const initialState = {
    data: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {
      _errors: []
    }
  };

  const [state, formAction] = useActionState(signUpUserAction, initialState);

  return (
    <Stack gap={3}>
      {state.errors._errors.map((error) => (
        <Alert severity="error" key={error}>
          {error}
        </Alert>
      ))}
      <Form action={formAction} autoComplete="off">
        <Grid container spacing={2}>
          <Grid size="grow">
            <TextField
              name="name"
              label="Name"
              autoComplete="name"
              required
              autoFocus
              fullWidth
              defaultValue={state.data.name}
              error={state.errors.name !== undefined}
              helperText={state.errors.name?._errors.join(', ')}
            />
          </Grid>
          <Grid container size={12}>
            <Grid size="grow">
              <TextField
                name="username"
                label="Username"
                type="username"
                autoComplete="true"
                required
                fullWidth
                defaultValue={state.data.username}
                error={state.errors.username !== undefined}
                helperText={state.errors.username?._errors.join(', ')}
              />
            </Grid>
            <Grid size="grow">
              <TextField
                name="email"
                label="Email Adress"
                type="email"
                autoComplete="email"
                required
                fullWidth
                defaultValue={state.data.email}
                error={state.errors.email !== undefined}
                helperText={state.errors.email?._errors.join(', ')}
              />
            </Grid>
            <Grid size="grow">
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                fullWidth
                defaultValue={state.data.password}
                error={state.errors.password !== undefined}
                helperText={state.errors.password?._errors.join(', ')}
              />
            </Grid>
            <Grid size="grow">
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                required
                fullWidth
                defaultValue={state.data.confirmPassword}
                error={state.errors.confirmPassword !== undefined}
                helperText={state.errors.confirmPassword?._errors.join(', ')}
              />
            </Grid>
            <Grid size={12}>
              <SubmitButton endIcon={<SendIcon />} fullWidth>
                Sign Up
              </SubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );
}
