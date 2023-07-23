import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
