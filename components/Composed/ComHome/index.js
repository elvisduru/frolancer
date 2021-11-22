import Hero from "./molecules/hero";
import Features from "./molecules/features";
import Clients from "./molecules/clients";
import Goals from "./molecules/goals";
import Headlines from "./molecules/headlines";
import Extra from "./molecules/Extra";
import Cta from "./molecules/cta/Cta";
import Services from "./molecules/services/Services";

const ComHome = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Features />
      <Services />
      <Goals />
      <Headlines />
      <Extra />
      <Cta />
    </main>
  );
};

export default ComHome;
