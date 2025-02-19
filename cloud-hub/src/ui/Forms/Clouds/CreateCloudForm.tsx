'use client';

import { revalidatePath } from 'next/cache';
import Form from 'next/form';
import { api } from '@/lib';
import Grid from '@mui/material/Grid2';
import { Button, MenuItem, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export async function handleSubmit(formData: FormData) {
  await api.post('/clouds', formData);

  revalidatePath('/clouds');
}

const sizeUnits = ['B', 'KB', 'MB', 'GB', 'TB'];

// TODO: Add suspense
export default function CreateCloudForm() {
  return (
    <Form action={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid size="grow">
          <TextField
            id="name"
            label="Name"
            type="text"
            autoComplete="false"
            required
            autoFocus
            fullWidth
          />
        </Grid>
        <Grid container size={12}>
          <Grid size="grow">
            <TextField
              id="allocatedSize"
              label="Allocated size"
              type="number"
              autoComplete="false"
              required
              fullWidth
            />
          </Grid>
          <Grid size="auto">
            <TextField id="sizeUnit" label="Unit" select defaultValue="GB" required>
              {sizeUnits.map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={12}>
            <Button type="submit" variant="contained" endIcon={<SendIcon />} fullWidth>
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}
