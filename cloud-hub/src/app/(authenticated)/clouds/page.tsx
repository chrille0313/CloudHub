import Grid from '@mui/material/Grid2';
import { CloudCard } from '@/components/Cards';
import { TitledSection } from '@/components/Sections';

export default function Clouds() {
  const clouds = [
    { name: 'Cloud 1', size: 10000000000, shared: false },
    { name: 'Cloud 2', size: 20000000000, shared: true },
    { name: 'Cloud 3', size: 30000000000, shared: false },
    { name: 'Cloud 4', size: 40000000000, shared: true },
    { name: 'Cloud 5', size: 50000000000, shared: false },
    { name: 'Cloud 6', size: 60000000000, shared: true },
    { name: 'Cloud 7', size: 70000000000, shared: false },
    { name: 'Cloud 8', size: 80000000000, shared: true },
    { name: 'Cloud 9', size: 90000000000, shared: false },
    { name: 'Cloud 10', size: 100000000000, shared: true },
    { name: 'Cloud 11', size: 110000000000, shared: false },
    { name: 'Cloud 12', size: 120000000000, shared: true }
  ];

  const cloudCardSize = 3;

  return (
    <TitledSection title="My Clouds" padding="2rem" gap="1rem">
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {clouds.map((cloud) => (
          <Grid
            key={cloud.name}
            size={{ xs: cloudCardSize * 4, sm: cloudCardSize * 2, md: cloudCardSize }}
          >
            <CloudCard cloud={cloud} />
          </Grid>
        ))}
      </Grid>
    </TitledSection>
  );
}
