import Footer from "@/components/Footer/Footer";
import FirstStep from "@/components/Plan/FirstStep";
import NextStep from "@/components/Plan/NextStep";
import SecondStep from "@/components/Plan/SecondStep";
import StepsTitles from "@/components/Plan/StepsTitles";
import ThirdStep from "@/components/Plan/ThirdStep";

const page = () => {
  return (
    <main className="w-full h-50 relative top-17.5">
      <StepsTitles />
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <NextStep />
      <Footer />
    </main>
  );
};

export default page;
