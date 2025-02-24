'use client';

import Grid from '@mui/material/Grid2';
import { MenuItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Form from 'next/form';
import createCloudAction from '@/components/Cloud/actions';
import SubmitButton from '@/ui/Forms/SubmitButton';
import { useActionState } from 'react';

const sizeUnits = ['B', 'KB', 'MB', 'GB', 'TB'];

// TODO: Add suspense
export default function CreateCloudForm() {
  const initialState = {
    data: {
      name: '',
      allocatedSize: 0
    },
    errors: {
      _errors: []
    }
  };

  const [state, formAction] = useActionState(createCloudAction, initialState);

  return (
    <Form action={formAction} autoComplete="off">
      <Grid container spacing={2}>
        <Grid size="grow">
          <TextField
            name="name"
            label="Name"
            type="text"
            autoComplete="false"
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
              name="allocatedSize"
              label="Allocated size"
              // type="number"
              autoComplete="false"
              required
              fullWidth
              defaultValue={state.data.allocatedSize}
              error={state.errors.allocatedSize !== undefined}
              helperText={state.errors.allocatedSize?._errors.join(', ')}
            />
          </Grid>
          <Grid size="auto">
            <TextField name="sizeUnit" label="Unit" select defaultValue="GB" required>
              {sizeUnits.map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={12}>
            <SubmitButton endIcon={<SendIcon />} fullWidth>
              Create
            </SubmitButton>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}
