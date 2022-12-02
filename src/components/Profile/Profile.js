import React from "react";
import "./Profile.css";
import img from "../../image/avt.jpg";
import { FaRegDotCircle } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="container__profile">
            <img className="avatar" src={img} alt="" />
            <div className="desc__author">
                Các vở tuồng cải lương nổi tiếng và được các nghệ sĩ biểu diễn nhiều nơi như Người tình trên chiến trận,
                Dốc sương mù. <br />
                Ngoài ra còn Tâm sự loài chim biển, Cuốn theo chiều gió, Trần Giã Cẩm Giang…
                <div className="name__author">Nguyên Thảo</div>
            </div>
            <div className="right__profile">
                <h1>
                    ĐÔI LỜI <br /> VỀ SOẠN GIẢ
                </h1>
                <p>
                    Soạn giả Nguyên Thảo tên thật là Đan Đức Hạnh, sinh năm 1942 tại Thanh Hoá. Ông được anh họ là soạn
                    giả Yên Lang hướng dẫn vào nghề sáng tác và được nhiều người ví như cặp đôi "Sóng thần" trong giới
                    viết kịch bản cải lương.
                </p>
                <ul className="infor__list">
                    <li className="infor__item">
                        <FaRegDotCircle />
                        <span>TIỂU SỬ</span>
                    </li>
                    <li className="infor__item">
                        <FaRegDotCircle />
                        <span>TÁC PHẨM</span>
                    </li>
                    <li className="infor__item">
                        <FaRegDotCircle />
                        <span>QUA ĐỜI</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
