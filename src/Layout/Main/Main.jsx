import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main() {
  return (
    <>
      <Header />

      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
