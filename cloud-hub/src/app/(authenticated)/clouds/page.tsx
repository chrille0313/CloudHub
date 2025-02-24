import Grid from '@mui/material/Grid2';
import { CloudCard } from '@/ui/Cards';
import { TitledSection } from '@/ui/Sections';
import { Cloud } from '@/components/Cloud/types';
import CreateNewCloudCard from '@/ui/Cards/CloudCard/CreateNewCloudCard';
import { getAllClouds } from '@/components/Cloud/service';

// TODO: Optimize using Suspense
export default async function Clouds() {
  const clouds: Cloud[] = await getAllClouds();
  const cloudCardSize = 3;
  const cloudCardSizeSx = { xs: cloudCardSize * 4, sm: cloudCardSize * 2, md: cloudCardSize };

  return (
    <TitledSection title="My Clouds" padding="2rem" gap="1rem" flex={1}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={cloudCardSizeSx}>
          <CreateNewCloudCard />
        </Grid>
        {clouds.map((cloud) => (
          <Grid key={cloud.name} size={cloudCardSizeSx}>
            <CloudCard cloud={cloud} />
          </Grid>
        ))}
      </Grid>
    </TitledSection>
  );
}
