import { getCloudById } from '@/components/Cloud/service';
import { TitledSection } from '@/ui/Sections';
import { notFound } from 'next/navigation';

export type CloudPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CloudPage({ params }: CloudPageProps) {
  const { id } = await params;
  const cloud = await getCloudById(id);

  if (!cloud) {
    return notFound();
  }

  return <TitledSection title={cloud.name} padding="2rem" gap="1rem" flex={1}></TitledSection>;
}
