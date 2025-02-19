import CreateCloudForm from '@/ui/Forms/Clouds';
import { TitledSection } from '@/ui/Sections';

export default function NewCloudPage() {
  return (
    <TitledSection
      title="Create new cloud"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="100vh"
    >
      <CreateCloudForm />
    </TitledSection>
  );
}
