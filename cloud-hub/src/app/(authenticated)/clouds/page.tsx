import { CloudCard } from '@/ui/Cards';
import { TitledSection } from '@/ui/Sections';
import { Cloud } from '@/components/Cloud/types';
import CreateNewCloudCard from '@/ui/Cards/CloudCard/CreateNewCloudCard';
import { getAllClouds } from '@/components/Cloud/service';
import CardGrid from '@/ui/Containers/GridContainer';

// TODO: Optimize using Suspense
export default async function Clouds() {
  const clouds: Cloud[] = await getAllClouds();

  return (
    <TitledSection title="My Clouds" padding="2rem" gap="1rem" flex={1}>
      <CardGrid minHeight={200}>
        <CreateNewCloudCard />
        {...clouds.map((cloud) => <CloudCard key={cloud.name} cloud={cloud} />)}
      </CardGrid>
    </TitledSection>
  );
}
