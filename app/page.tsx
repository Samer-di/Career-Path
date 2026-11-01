import Goal from "@/components/Home/Goal";
import Steps from "@/components/Home/Steps";
import About from "@/components/Home/About";
import Introduction from "@/components/Home/Introduction";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <main className="relative top-17.5">
      <Introduction />
      <About />
      <Goal />
      <Steps />
      <Footer />
    </main>
  );
};

export default page;
