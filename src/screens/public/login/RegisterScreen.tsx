import { PageSection } from "@/components/layout/PageSection";
import img from "@/assets/img/register.svg"
import { RegisterForm } from "@/components/auth/RegisterForm";

export const RegisterScreen = () => {
  return (
    <PageSection>
      <div className="flex gap-20">
      <div className="w-180">
        <img src={img} />
      </div>
      <RegisterForm />
      </div>
    </PageSection>
  );
};
