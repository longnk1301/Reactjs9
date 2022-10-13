import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import DataProvider from "../../context";

const DefaultLayout = () => {
    return (
        <div>
            <DataProvider>
                <Header />
                <Outlet />
            </DataProvider>

            <Footer />
        </div>
    );
};

export default DefaultLayout;
