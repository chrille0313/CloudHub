'use client';

import { Card, CardActionArea, CardProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NextLink from 'next/link';

export type CreateNewCloudCardProps = CardProps;

export default function CreateNewCloudCard(props: CreateNewCloudCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{ height: '100%', borderStyle: 'dashed', borderWidth: 2, ...props.sx }}
      {...props}
    >
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
