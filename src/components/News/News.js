import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import Img from "../../image/_MG_2081.jpg";
import n1 from "../../image/n1.jpg";
import n2 from "../../image/n2.jpg";
import n3 from "../../image/n3.jpg";
import n4 from "../../image/n4.jpg";
import { BsCalendar4 } from "react-icons/bs";

const News = () => {
    return (
        <div className="container__news">
            <div className="top__news">
                <img src={Img} alt="" />
                <div className="overlay"></div>
            </div>
            <div className="bot__news">
                <div className="position__news">
                    <div className="top__position">
                        <h3>VỞ TUỒNG NỔI TIẾNG</h3>
                        <h1>NGƯỜI TÌNH TRÊN CHIẾN TRẬN</h1>
                        <div className="name__time">
                            <span>Soạn giả: Mộc Linh và Nguyên Thảo </span>
                            <span>Thời lượng: 1 tiếng 30 phút</span>
                        </div>
                    </div>
                    <p className="desc__news">
                        Vở tuồng lấy bối cảnh nước Tây Hạ đầu thế kỷ XIII đang chịu họa xâm lăng của các bộ lạc Mông Cổ,
                        nhưng tuồng tích xoay quanh mối tình của hai con người khác huyết thống chứ không chủ trương đề
                        cập chiến sự.
                    </p>
                    <img src={n4} alt="" />
                </div>
                <div className="left__bot">
                    <h1>TIN TỨC</h1>
                    <div className="card__news">
                        <img src={n1} alt="" />
                        <div className="content__news">
                            <h2>Chương trình giới thiệu Tuồng Hồn Việt</h2>
                            <span>
                                <BsCalendar4 />
                                15/11/2022
                            </span>
                            <p>Lễ ra mắt và phục hưng nghệ thuật Tuồng tại Việt Nam...</p>
                            <h3>Đọc thêm</h3>
                        </div>
                    </div>

                    <div className="card__news">
                        <img src={n2} alt="" />
                        <div className="content__news">
                            <h2>Vở Tuồng lịch sử được lên sóng</h2>
                            <span>
                                <BsCalendar4 />
                                18/11/2022
                            </span>
                            <p>Phục hưng Vở Tuồng lịch sử duy nhất, tiêu biệt cho dân tộc...</p>
                            <h3>Đọc thêm</h3>
                        </div>
                    </div>
                </div>
                <div className="right__bot">
                    <Link className="cus-btn" to="/news">
                        <button className="button mb">TẤT CẢ</button>
                    </Link>
                    <div className="big__news">
                        <img src={n3} alt="" />
                        <div className="content__bigNews">
                            <h2>Tường Hồn Việt được công nhận Di sản Văn Hóa Việt Nam</h2>
                            <span>
                                <BsCalendar4 />
                                20/11/2022
                            </span>
                            <p>
                                Di sản Văn Hóa Việt Nam Tuồng Hồn Việt được công nhận và hứa hẹn mong lại nhiều cảm xúc
                                đến mỗi khán giả khi thưởng thức nghệ thuật truyền thống dân tộc...
                            </p>
                            <h3>Đọc thêm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
