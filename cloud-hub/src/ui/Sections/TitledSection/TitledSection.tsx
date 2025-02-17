import { Box, Stack, StackProps, Typography } from '@mui/material';

export interface TitledSectionProps extends StackProps {
  title: string;
}

export default function TitledSection({ title, children, ...props }: TitledSectionProps) {
  return (
    <Stack {...props}>
      <Typography variant="overline" fontWeight="bold" fontSize="1.5rem" marginLeft="1rem">
        {title}
      </Typography>
      <Box>{children}</Box>
    </Stack>
  );
}
