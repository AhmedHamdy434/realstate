import Footer from "../../../shared/components/template/Footer";
import Header from "../../../shared/components/template/Header";
import AboutUsSection from "../components/organism/AboutUsSection";
import BestProperties from "../components/organism/BestProperties";
import ClientsSays from "../components/organism/ClientsSays";
import GivingSection from "../components/organism/GivingSection";
import InformationForm from "../components/organism/InformationForm";
import Landing from "../components/organism/Landing";
import Seperative from "../components/organism/Seperative";

const HomePage = () => {
  return (
    <>
      <Header currentPage="Home" />
      <Landing />
      <BestProperties />
      <GivingSection />
      <AboutUsSection />
      <Seperative />
      <ClientsSays />
      <InformationForm />
      <Footer />
    </>
  );
};

export default HomePage;
