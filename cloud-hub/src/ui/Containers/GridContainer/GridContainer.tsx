import Grid from '@mui/material/Grid2';
import { Grid2Props as GridProps } from '@mui/material/Grid2';
import React from 'react';

export interface CardGridProps extends GridProps {
  children: React.ReactNode;
  cardSize?: GridProps['size'];
}

export default function CardGrid({
  children,
  cardSize = { xs: 3 * 4, sm: 3 * 2, md: 3 },
  ...props
}: CardGridProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} {...props}>
      {React.Children.toArray(children).map((child, index) => (
        <Grid key={index} size={cardSize}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
