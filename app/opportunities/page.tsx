import Footer from "@/components/Footer/Footer";
import Cards from "@/components/Opportunities/Cards";
import Introduction from "@/components/Opportunities/Introduction";

const page = () => {
  return (
    <main className="w-full relative top-17.5">
      <Introduction />
      <Cards />
      <Footer />
    </main>
  );
};

export default page;
