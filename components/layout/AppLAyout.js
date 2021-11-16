import Navbar from '../atoms/navbar/Navbar';
import Footer from '../atoms/footer/Footer';

const AppLAyout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLAyout;
