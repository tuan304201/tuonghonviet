import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Local from "../components/Local/Local";
import banner from "../image/nw.jpg";
import NewsBody from "../components/NewsBody/NewsBody";

const NewsHome = () => {
    return (
        <div>
            <Header />
            <div className="p-r">
                <Banner banner={banner} />
                <Local title="TIN TỨC" local="TRANG CHỦ >  TIN TỨC" />
            </div>
            <NewsBody />
            <Footer />
        </div>
    );
};

export default NewsHome;
