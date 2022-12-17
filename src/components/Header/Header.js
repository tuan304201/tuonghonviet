import React from "react";
import "./Header.css";
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaYoutube, FaBars } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../image/LogoFix.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link className="header__logo" to="/">
                <img src={Logo} alt="" />
            </Link>

            <div className="header__menu">
                <div className="menu__contact">
                    <p className="item__contact">HOTLINE: +(84) 982 051 603</p>
                    <span className="line">━</span>
                    <p className="item__contact">EMAIL: tuonghonviet@gmail.com</p>
                    <span className="line">━</span>
                    <p className="item__contact">OPENING HOURS: Mon - Sat : 09:00 - 21:00</p>
                </div>

                <ul className="menu__nav">
                    <Link className="nav__item" to="/">
                        <li>TRANG CHỦ</li>
                    </Link>
                    <Link className="nav__item" to="/intro">
                        <li>GIỚI THIỆU</li>
                    </Link>
                    <Link className="nav__item" to="/programs">
                        <li>CHƯƠNG TRÌNH</li>
                    </Link>
                    <Link className="nav__item" to="/news">
                        <li>TIN TỨC</li>
                    </Link>
                    <Link className="nav__item" to="/contact">
                        <li>LIÊN HỆ</li>
                    </Link>
                </ul>
            </div>

            <div className="header__action">
                <div className="top__action">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaYoutube />
                    <IoLogoWhatsapp />
                    <FaTelegramPlane />
                </div>

                <div className="bot__action">
                    <button>ĐẶT VÉ</button>
                    <FaBars />
                </div>
            </div>
        </div>
    );
};

export default Header;
