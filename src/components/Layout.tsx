import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => (
  <>
    <Header />
    <main style={{ padding: '1rem' }}>
      <Outlet />
    </main>
    <Footer />
  </>
);
