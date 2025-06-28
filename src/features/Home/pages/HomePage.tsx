import Header from "../../../shared/components/template/Header";
import AboutUsSection from "../components/template/AboutUsSection";
import BestHost from "../components/template/BestHost";
import BestProperties from "../components/template/BestProperties";
import ClientsSays from "../components/template/ClientsSays";
import GivingSection from "../components/template/GivingSection";
import InformationForm from "../components/template/InformationForm";
import Landing from "../components/template/Landing";
import MostRented from "../components/template/MostRented";
import Seperative from "../components/template/Seperative";

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
