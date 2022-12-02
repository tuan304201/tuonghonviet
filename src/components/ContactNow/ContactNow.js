import React from "react";
import "./ContactNow.css";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { SlPhone } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import map from "../../image/map.jpg";

const ContactNow = () => {
    return (
        <>
            <div className="container__contactNow">
                <div className="left__contactNow">
                    <div className="left__top">
                        <h1>LIÊN HỆ NGAY</h1>
                        <p>
                            Mọi thắc mắc và góp ý xin quý khách vui lòng liên hệ với chúng tôi qua thông tin liên hệ
                            dưới đây !
                        </p>
                    </div>
                    <div className="left__bottom">
                        <div className="type__contact">
                            <IoLocationOutline />
                            <div>
                                <h4>ĐỊA CHỈ</h4>
                                <p>
                                    Cao đẳng FPT Polytechnic <br /> Trịnh Văn Bô, Nam Từ Liêm, <br /> Hà Nội
                                </p>
                            </div>
                        </div>
                        <div className="type__contact">
                            <IoTimeOutline />
                            <div>
                                <h4>GIỜ MỞ CỬA</h4>
                                <p>
                                    Mon - Sat <br /> 09:00 AM - 21:00 PM
                                </p>
                            </div>
                        </div>
                        <div className="type__contact">
                            <SlPhone />
                            <div>
                                <h4>HOTLINE</h4>
                                <p>+(84) 982 051 603</p>
                            </div>
                        </div>
                        <div className="type__contact">
                            <GoMail />
                            <div>
                                <h4>EMAIL</h4>
                                <p>tuonghonviet@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right__contactNow">
                    <form action="">
                        <div className="df_form">
                            <div>
                                <label>Họ và tên</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text" />
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button className="submit">GỬI NGAY</button>
                    </form>
                </div>
            </div>
            <div className="contact__map">
                <img src={map} alt="" />
            </div>
        </>
    );
};

export default ContactNow;
