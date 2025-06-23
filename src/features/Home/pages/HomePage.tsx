import Header from "../../../shared/components/template/Header";
import AboutUsSection from "../components/organism/AboutUsSection";
import BestHost from "../components/organism/BestHost";
import BestProperties from "../components/organism/BestProperties";
import ClientsSays from "../components/organism/ClientsSays";
import GivingSection from "../components/organism/GivingSection";
import InformationForm from "../components/organism/InformationForm";
import Landing from "../components/organism/Landing";
import MostRented from "../components/organism/MostRented";
import Seperative from "../components/organism/Seperative";

const HomePage = () => {
  return (
    <>
      <Header currentPage="Home" />
      <Landing />
      <BestProperties />
      <MostRented />
      <GivingSection />
      <BestHost />
      <AboutUsSection />
      <Seperative />
      <ClientsSays />
      <InformationForm />
    </>
  );
};

export default HomePage;
