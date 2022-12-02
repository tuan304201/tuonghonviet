import React from "react";
import BgTrailer from "../../image/trailer.jpg";
import VideoTrailer from "../../image/video.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import "./Trailer.css";

const Trailer = () => {
    return (
        <div className="container__trailer">
            <div className="realtion">
                <img className="background__trailer" src={BgTrailer} alt="" />
                <div className="overlay"></div>
                <div className="left__trailer">
                    <h1>
                        NGƯỜI TÌNH <br /> TRÊN CHIẾN TRẬN
                    </h1>
                    <div className="text__desc">
                        <p>Soạn giả: Mộc Linh và Nguyên Thảo</p>
                        <p>Giá vé: 150,000 VNĐ</p>
                    </div>
                    <div className="text__desc">
                        <p>Ngày chiếu: 11/11/2022</p>
                        <p>Thời lượng: 1 tiếng 30 phút</p>
                    </div>
                </div>
                <div className="right__trailer">
                    <h2>CHI TIẾT VỞ TUỒNG</h2>
                    <p>
                        Vở tuồng lấy bối cảnh nước Tây Hạ đầu thế kỷ XIII đang chịu họa xâm lăng của các bộ lạc Mông Cổ,
                        nhưng tuồng tích xoay quanh mối tình của hai con người khác huyết thống chứ không chủ trương đề
                        cập chiến sự.
                    </p>
                    <div className="trailer__video">
                        <img src={VideoTrailer} alt="" />
                        <div className="play__video">
                            <AiFillPlayCircle />
                            <span>XEM TRAILER</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
