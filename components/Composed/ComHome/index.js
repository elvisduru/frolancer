import Hero from './molecules/hero';
import Features from './molecules/Features';
import Clients from './molecules/clients';
import Goals from './molecules/goals';
import Headlines from './molecules/headlines';
import Extra from './molecules/Extra';
import Cta from './molecules/cta';
import Services from './molecules/services';

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
