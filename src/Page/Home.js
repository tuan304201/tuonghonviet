import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import News from "../components/News/News";
import Product from "../components/Product/Product";
import Profile from "../components/Profile/Profile";
import Program from "../components/Program/Program";
import Trailer from "../components/Trailer/Trailer";

const Home = () => {
    return (
        <div>
            <Header />
            <Trailer />
            <Profile />
            <Product />
            <Program />
            <News />
            <Footer />
        </div>
    );
};

export default Home;
