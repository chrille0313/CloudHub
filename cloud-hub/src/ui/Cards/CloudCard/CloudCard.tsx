import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  Typography
} from '@mui/material';

import { Delete, Download, Edit, Group, Settings, Share } from '@mui/icons-material';
import NextLink from 'next/link';
import MoreButton, { MenuItemProps } from './MoreButton';
import { formatNumber } from '@/utils';
import { Cloud } from '@/components/Cloud/types';
import CloudCardPlaceholder from '@/../public/images/CloudCardPlaceholder.jpg';
import NextImage from 'next/image';

export interface CloudCardProps extends CardProps {
  cloud: Cloud;
}

export default function CloudCard({ cloud, ...props }: CloudCardProps) {
  const menuItems: MenuItemProps[] = [
    { icon: <Edit />, text: 'Rename' },
    { icon: <Delete />, text: 'Delete', divider: true },
    { icon: <Share />, text: 'Share' },
    { icon: <Download />, text: 'Download', divider: true },
    { icon: <Settings />, text: 'Settings' }
  ];

  return (
    <Card sx={{ position: 'relative' }} {...props}>
      <CardActionArea LinkComponent={NextLink} href={`/clouds/${cloud.id}`}>
        <CardMedia sx={{ height: 150 }}>
          <Box position="relative" width="100%" height="100%">
            <NextImage src={CloudCardPlaceholder} alt="Cloud card placeholder" />
          </Box>
        </CardMedia>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography>{cloud.name}</Typography>
            {cloud.sharedWith?.length && <Group sx={{ color: 'text.secondary' }} />}
          </Box>
          <Typography variant="body2" color="text.secondary">
            {formatNumber(cloud.allocatedSize, 'B')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ position: 'absolute', bottom: 10, right: 0 }}>
        <MoreButton menuItems={menuItems} />
      </CardActions>
    </Card>
  );
}
