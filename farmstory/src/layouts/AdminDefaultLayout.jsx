import Footer from "../../src/components/admin/Footer";
import Header from "../../src/components/admin/Header";
import Aside from "../components/admin/Aside";

export default function AdminLayout({ children }){

    return (
        <div id="admin-container">
        <Header />
        <main>
         <Aside />
         {children}
        </main>
         <Footer />
        </div>
    );
}