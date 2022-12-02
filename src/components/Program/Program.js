import React from "react";
import "./Program.css";
import pr1 from "../../image/_MG_1915.jpg";
import pr2 from "../../image/pr2.jpg";

const Program = () => {
    return (
        <div className="container__program">
            <div className="left__program">
                <h1>CHƯƠNG TRÌNH</h1>
                <p>
                    Nơi chiến tuyến, đâu đó vẫn len lỏi những mối tình nồng nàn, và ở đây tác giả đã tái hiện một chuyện
                    tình đượm đạm màu chia ly. Bên cạnh mối tình nơi chiến tuyến, vở “Người tình trên chiến tuyến” cũng
                    lột tả về câu chuyện gia đình, tình cảm máu mủ lấy biết bao nước mắt của khán giả để rồi vở tuồng
                    này vẫn trường tồn với thời gian.
                </p>
                <button className="button">ĐỌC THÊM</button>
            </div>
            <div className="center__program">
                <img src={pr1} alt="" />
                <div className="desc__program">
                    <h3>NGƯỜI TÌNH TRÊN CHIẾN TRẬN</h3>
                    <p>11/11/2022</p>
                    <p>
                        Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn Ngà.
                    </p>
                    <button className="button">ĐẶT VÉ</button>
                </div>
            </div>
            <div className="right__program">
                <img src={pr2} alt="" />
                <div className="desc__program">
                    <h3>NGƯỜI TÌNH TRÊN CHIẾN TRẬN</h3>
                    <p>11/11/2022</p>
                    <p>
                        Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn Ngà.
                    </p>
                    <button className="button">ĐẶT VÉ</button>
                </div>
            </div>
        </div>
    );
};

export default Program;
