import { LoginForm } from "@/components/auth/LoginForm";
import { PageSection } from "@/components/layout/PageSection";
import img from "@/assets/img/auth.svg"

export const LoginScreen = () => {


  return (
    <>
    <PageSection>
      <div className="flex gap-30">
      <div className="hidden lg:inline">
        <img src={img} />
      </div>
      <LoginForm />
      </div>
    </PageSection>
    </>
  );
};

export default LoginScreen;
