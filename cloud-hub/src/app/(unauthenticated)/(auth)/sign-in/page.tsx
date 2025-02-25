import SignInForm from '@/ui/Forms/Auth/SignIn';
import { TitledSection } from '@/ui/Sections';

export default function SignInPage() {
  return (
    <TitledSection
      title="Sign In"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="100vh"
    >
      <SignInForm />
    </TitledSection>
  );
}
