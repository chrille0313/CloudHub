'use client';

import { authClient } from '@/lib/auth-client';
import { Box, Container, LinearProgress, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Graphic from '@/../public/graphics/undraw_loading.svg';
import Image from 'next/image';

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/sign-in');
          }
        }
      });
    };
    signOut();
  });

  return (
    <Container
      sx={{
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Stack gap="1.5rem" justifyContent="center" alignItems="center">
        <Box maxHeight={350}>
          <Image src={Graphic} alt="Sign Out" priority />
        </Box>
        <Typography variant="h4">Signing Out...</Typography>
        <Box maxWidth={300} width="100%">
          <LinearProgress />
        </Box>
      </Stack>
    </Container>
  );
}
