import { Box, BoxProps, Stack, StackProps, Typography } from '@mui/material';

export interface TitledSectionProps extends StackProps {
  title: string;
  contentProps?: BoxProps;
}

export default function TitledSection({
  title,
  children,
  contentProps,
  ...props
}: TitledSectionProps) {
  return (
    <Stack {...props}>
      <Typography variant="overline" fontWeight="bold" fontSize="1.5rem" marginLeft="1rem">
        {title}
      </Typography>
      <Box {...contentProps}>{children}</Box>
    </Stack>
  );
}
