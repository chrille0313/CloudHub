import Grid from '@mui/material/Grid2';
import { CloudCard } from '@/ui/Cards';
import { TitledSection } from '@/ui/Sections';
import { Cloud } from '@/components/Cloud/types';
import { ApiResponse } from '@/app/api/v1/clouds/types';
import CreateNewCloudCard from '@/ui/Cards/CloudCard/CreateNewCloudCard';
import { api } from '@/lib';

// TODO: Optimize using Suspense
export default async function Clouds() {
  const response = await api.get('/clouds');
  const responseJson: ApiResponse<Cloud[]> = response.data;

  // FIXME: Handle properly
  if (responseJson.status !== 'success') {
    return <div>{responseJson.status}</div>;
  }

  const clouds: Cloud[] = responseJson.data || [];
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
