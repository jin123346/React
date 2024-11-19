import Footer from "../components/main/Footer";
import Header from "../components/main/header";

// eslint-disable-next-line react/prop-types
const  DefaultLayout = ({ children }) =>  {
 
    return (
        <div id="container">
            <Header />
                {children}
            <Footer />
        </div>

    );

};

export default DefaultLayout;
