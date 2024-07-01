import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
