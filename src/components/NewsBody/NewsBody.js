import React from "react";
import "./NewsBody.css";
import img1 from "../../image/nws.jpg";
import { TbCircleDot } from "react-icons/tb";
import { BsCalendar4 } from "react-icons/bs";
import tt1 from "../../image/tt1.jpg";
import tt2 from "../../image/tt2.jpg";
import tt3 from "../../image/tt3.jpg";
import tt4 from "../../image/tt4.jpg";

const NewsBody = () => {
    return (
        <div className="container__newsBody">
            <div className="column1__news">
                <div className="top-column1__news">
                    <h2>DANH MỤC</h2>
                    <ul>
                        <li>
                            <TbCircleDot />
                            <span>Tiêu đề</span>
                        </li>
                        <li>
                            <TbCircleDot />
                            <span>Nổi bật</span>
                        </li>
                        <li>
                            <TbCircleDot />
                            <span>Xu hướng</span>
                        </li>
                        <li>
                            <TbCircleDot />
                            <span>Lâu đời</span>
                        </li>
                        <li>
                            <TbCircleDot />
                            <span>Lịch sử</span>
                        </li>
                    </ul>
                </div>
                <div className="bot-column1__news">
                    <h2>ĐÃ XEM</h2>
                    <ul>
                        <li>
                            <p>Chương trình ra mắt Tuồng Hồn Việt</p>
                            <BsCalendar4 /> <span>15/11/2022</span>
                        </li>
                        <li>
                            <p>Chương trình ra mắt Tuồng Hồn Việt</p>
                            <BsCalendar4 /> <span>15/11/2022</span>
                        </li>
                        <li>
                            <p>Chương trình ra mắt Tuồng Hồn Việt</p>
                            <BsCalendar4 /> <span>15/11/2022</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="column2__news">
                <div className="top-column2__news">
                    <div className="p-r">
                        <img src={img1} alt="" />
                        <div className="overlay"></div>
                        <div className="title__firstNews">
                            <h3>LỄ RA MẮT NGHỆ THUẬT TUỒNG HỒN VIỆT</h3>
                            <p>Lễ ra mắt và phục hưng nghệ thuật Tuồng tại Việt Nam...</p>
                            <h3>Đọc thêm</h3>
                        </div>
                    </div>
                </div>
                <h1>TIN TỨC MỚI</h1>
                <div className="bottom-column2__news">
                    <div className="card__newsBody">
                        <img src={tt1} alt="" />
                        <div className="content__newsBody">
                            <h2>Chương trình ra mắt Tuồng Hồn Việt</h2>
                            <span>
                                <BsCalendar4 />
                                15/11/2022
                            </span>
                            <p>Lễ ra mắt và phục hưng nghệ thuật Tuồng tại Việt Nam...</p>
                            <h2>Đọc thêm</h2>
                        </div>
                    </div>
                    <div className="card__newsBody">
                        <img src={tt2} alt="" />
                        <div className="content__newsBody">
                            <h2>Chương trình giới thiệu Tuồng Hồn Việt</h2>
                            <span>
                                <BsCalendar4 />
                                18/11/2022
                            </span>
                            <p>Phục hưng Vở Tuồng lịch sử duy nhất, tiêu biệt cho dân tộc...</p>
                            <h2>Đọc thêm</h2>
                        </div>
                    </div>
                    <div className="card__newsBody">
                        <img src={tt3} alt="" />
                        <div className="content__newsBody">
                            <h2>Tường Hồn Việt được công nhận Di sản Văn Hóa Việt Nam</h2>
                            <span>
                                <BsCalendar4 />
                                20/11/2022
                            </span>
                            <p>
                                Công nhận và hứa hẹn mong lại nhiều cảm xúc đến mỗi khán giả khi thưởng thức nghệ thuật
                                truyền thống dân tộc...
                            </p>
                            <h2>Đọc thêm</h2>
                        </div>
                    </div>
                    <div className="card__newsBody">
                        <img src={tt4} alt="" />
                        <div className="content__newsBody">
                            <h2>Tường Hồn Việt được công nhận Di sản Văn Hóa Việt Nam</h2>
                            <span>
                                <BsCalendar4 />
                                20/11/2022
                            </span>
                            <p>
                                Công nhận và hứa hẹn mong lại nhiều cảm xúc đến mỗi khán giả khi thưởng thức nghệ thuật
                                truyền thống dân tộc...
                            </p>
                            <h2>Đọc thêm</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBody;
