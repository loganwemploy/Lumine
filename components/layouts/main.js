import Footer from '../Footer';
import Header from '../Header';

const MainLayout = ({ children }) => (
  <div className="main-container">
    <Header />

    <div className="content-wrapper">{children}</div>
<Footer />
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      .main-container {
          margin: auto
      }
   
    `}</style>
  </div>
);

export default MainLayout;