import Hero from "./molecules/hero";
import Features from "./molecules/features";
import Clients from "./molecules/clients";
import Goals from "./molecules/goals";
import Headlines from "./molecules/headlines";
import Extra from "./molecules/Extra";

const ComHome = () => {
  return (
    <main>
      <Hero />
      <Clients />
      <Features />
      <Goals />
      <Headlines />
      <Extra />
    </main>
  );
};

export default ComHome;
