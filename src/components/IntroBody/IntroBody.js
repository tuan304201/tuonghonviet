import React from "react";
import "./IntroBody.css";
import img1 from "../../image/img1.jpg";
import img2 from "../../image/_MG_1838.jpg";
import img3 from "../../image/imgLogo.jpg";
import img4 from "../../image/_MG_1849.jpg";
import img5 from "../../image/1.jpg";
import img6 from "../../image/4.jpg";
import img7 from "../../image/5.jpg";

const IntroBody = () => {
    return (
        <div className="container__introBody">
            <div className="nth-1">
                <h1>HỒN VIỆT - HỒN PHÁCH DÂN TỘC</h1>
                <p>
                    Nghệ thuật Tuồng cổ được hình thành trên cơ sở ca, vũ, nhạc và các trò diễn xướng dân gian với ngôn
                    ngữ văn chương bác học kết hợp nhuần nhuyễn văn chữ Hán với văn Nôm đã có thời kỳ phát triển cực
                    thịnh vào thế kỷ 17-18. Cuối thế kỷ 18, Tuồng cổ đã phát triển một cách hoàn chỉnh mọi mặt từ kịch
                    bản văn học đến nghệ thuật biểu diễn.
                </p>
            </div>
            <div className="nth-2">
                <div className="nth-2__left">
                    <h1>TUỒNG HỒN VIỆT</h1>
                    <p>
                        Tuồng Hồn Việt được hình thành trên cơ sở ca vũ nhạc và các trò diễn xướng dân gian, trở thành
                        một môn nghệ thuật không thể thiếu trong đời sống tinh thần của nhân dân, mà chỉ cần thoáng nhìn
                        hóa trang và phục sức của nghệ sĩ trên sân khấu.
                    </p>
                </div>
                <div className="nth-2__right">
                    <div className="p-r">
                        <div>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>
                        <img className="cus-img" src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div className="nth-3">
                <div className="p-r">
                    <img src={img4} alt="" />
                    <div className="overlay"></div>
                    <div className="decs__introAu">
                        <p>CEO & Founder</p>
                        <h1>NGUYỄN PHI KIÊN</h1>
                        <p className="text-color">
                            CEO & FounderLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        </p>
                        <p>ĐỌC THÊM</p>
                    </div>
                </div>
            </div>
            <div className="nth-4">
                <div className="nth4-top">
                    <h1>THÀNH VIÊN</h1>
                    <button className="button">TẤT CẢ</button>
                </div>
                <div className="list_member">
                    <div className="card__member">
                        <img src={img5} alt="" />
                        <h2>NGUYỄN PHI KIÊN</h2>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="card__member">
                        <img src={img6} alt="" />
                        <h2>NGUYỄN TRUNG THÀNH</h2>
                        <p>Manager</p>
                    </div>
                    <div className="card__member">
                        <img src={img7} alt="" />
                        <h2>NGUYỄN TRỌNG LUẬN</h2>
                        <p>Marketing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroBody;
