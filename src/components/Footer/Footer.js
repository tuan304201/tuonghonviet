import React from "react";
import "./Footer.css";
import Logo from "../../image/Logo.png";
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <div className="container__footer">
            <div className="container__signin">
                <div className="left__signin">
                    <h1>ĐĂNG KÝ THÔNG TIN</h1>
                    <p>Vui lòng nhập Email cá nhận để nhận lịch chiếu mới nhất từ Tuồng Hồn Việt !</p>
                </div>
                <div className="right__signin">
                    <input type="text" placeholder="Email của bạn" />
                    <button className="btn-signin">ĐĂNG KÝ</button>
                </div>
            </div>

            <div className="center__footer">
                <img src={Logo} alt="" />
                <div>
                    <h1>LIÊN HỆ</h1>
                    <div className="list__item">
                        <p>Cao đẳng FPT Polytechnic</p>
                        <p>+(84) 982 051 603</p>
                        <p>tuonghonviet@gmail.com</p>
                        <p>www.facebook.com/honviet</p>
                    </div>
                </div>
                <div>
                    <h1>TRUY CẬP</h1>
                    <div className="list__item">
                        <p>Giới thiệu</p>
                        <p>Chương trình</p>
                        <p>Tin tức</p>
                        <p>Liên hệ</p>
                    </div>
                </div>
                <div>
                    <h1>HỖ TRỢ</h1>
                    <div className="list__item">
                        <p>Hỗ trợ</p>
                        <p>Câu hỏi thường gặp </p>
                        <p>Chính sách bảo mật</p>
                        <p>Điều khoản và điều kiện</p>
                    </div>
                </div>
            </div>

            <div className="bottom__footer">
                <p>
                    <span>HỒN VIỆT®</span> Nghệ Thuật Tuồng Việt Nam
                </p>
                <div className="icon__footer">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaYoutube />
                    <IoLogoWhatsapp />
                    <FaTelegramPlane />
                </div>
            </div>
        </div>
    );
};

export default Footer;
