import CreateCloudForm from '@/ui/Forms/Clouds';
import Modal from '@/ui/Modal';

export default function NewCloudModal() {
  return (
    <Modal title="Create new cloud">
      <CreateCloudForm />
    </Modal>
  );
}
