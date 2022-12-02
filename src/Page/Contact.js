import React from "react";
import Banner from "../components/Banner/Banner";
import ContactNow from "../components/ContactNow/ContactNow";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Local from "../components/Local/Local";
import banner from "../image/lh.jpg";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="p-r">
                <Banner banner={banner} />
                <Local title="LIÊN HỆ" local="TRANG CHỦ > LIÊN HỆ" />
            </div>
            <ContactNow />
            <Footer />
        </div>
    );
};

export default Contact;
