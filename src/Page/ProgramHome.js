import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Local from "../components/Local/Local";
import banner from "../image/pro.jpg";
import ProgramBody from "../components/ProgramBody/ProgramBody";

const ProgramHome = () => {
    return (
        <div>
            <Header />
            <div className="p-r">
                <Banner banner={banner} />
                <Local title="CHƯƠNG TRÌNH" local="TRANG CHỦ >  CHƯƠNG TRÌNH" />
            </div>
            <ProgramBody />
            <Footer />
        </div>
    );
};

export default ProgramHome;
