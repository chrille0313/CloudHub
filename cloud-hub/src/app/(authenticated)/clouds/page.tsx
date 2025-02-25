import { CloudCard } from '@/ui/Cards';
import { TitledSection } from '@/ui/Sections';
import { Cloud } from '@/components/Cloud/types';
import CreateNewCloudCard from '@/ui/Cards/CloudCard/CreateNewCloudCard';
import { getAllClouds } from '@/components/Cloud/service';
import CardGrid from '@/ui/Containers/GridContainer';
import { Box, Button, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircle';
import Image from 'next/image';
import NoData from '@/../public/graphics/undraw_no-data.svg';
import NextLink from 'next/link';

// TODO: Optimize using Suspense
export default async function Clouds() {
  const clouds: Cloud[] = await getAllClouds();

  return (
    <TitledSection
      title="My Clouds"
      padding="2rem"
      gap="1rem"
      flex={1}
      minHeight="100vh"
      contentProps={{ flex: 1 }}
    >
      {clouds.length > 0 ? (
        <CardGrid>
          <CreateNewCloudCard />
          {...clouds.map((cloud) => <CloudCard key={cloud.name} cloud={cloud} />)}
        </CardGrid>
      ) : (
        <Stack marginTop="10%" alignItems="center" justifyContent="center" gap={2}>
          <Box maxWidth={200}>
            <Image src={NoData} alt="No data" priority />
          </Box>
          <Stack alignItems="center" gap={1}>
            <Typography variant="h4">No Clouds Found</Typography>
            <Typography variant="body1">Get started by creating a new cloud below</Typography>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            LinkComponent={NextLink}
            href="/clouds/new"
            endIcon={<AddIcon />}
          >
            Create Cloud
          </Button>
        </Stack>
      )}
    </TitledSection>
  );
}
