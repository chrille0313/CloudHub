import CreateCloudForm from '@/ui/Forms/Clouds';
import Modal from '@/ui/Modal';
import { TitledSection } from '@/ui/Sections';

export default function NewCloudModal() {
  return (
    <Modal>
      <TitledSection
        title="Create new cloud"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CreateCloudForm />
      </TitledSection>
    </Modal>
  );
}
