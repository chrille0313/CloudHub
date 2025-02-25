import SignUpForm from '@/ui/Forms/Auth/SignUp';
import { TitledSection } from '@/ui/Sections';

export default function SignUpPage() {
  return (
    <TitledSection
      title="Sign Up"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="100vh"
    >
      <SignUpForm />
    </TitledSection>
  );
}
