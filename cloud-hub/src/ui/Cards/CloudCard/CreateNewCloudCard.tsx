'use client';

import { Card, CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NextLink from 'next/link';

export default function CreateNewCloudCard() {
  return (
    <Card variant="outlined" sx={{ height: '100%', borderStyle: 'dashed', borderWidth: 2 }}>
      <CardActionArea
        LinkComponent={NextLink}
        href="/clouds/new"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
      >
        <AddIcon color="action" />
      </CardActionArea>
    </Card>
  );
}
