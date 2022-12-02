import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Local from "../components/Local/Local";
import banner from "../image/intro.jpg";
import IntroBody from "../components/IntroBody/IntroBody";

const Intro = () => {
    return (
        <div>
            <Header />
            <div className="p-r">
                <Banner banner={banner} />
                <Local title="GIỚI THIỆU" local="TRANG CHỦ > GIỚI THIỆU" />
            </div>
            <IntroBody />
            <Footer />
        </div>
    );
};

export default Intro;
