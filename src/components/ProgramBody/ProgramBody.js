import React from "react";
import "./ProgramBody.css";
import img1 from "../../image/_MG_2165.jpg";
import img2 from "../../image/a2.jpg";
import img3 from "../../image/a3.jpg";
import img4 from "../../image/_MG_2141.jpg";
import img5 from "../../image/p3.jpg";

const ProgramBody = () => {
    return (
        <div className="container__programBody">
            <div className="column1">
                <div className="column1__top">
                    <h1>CHƯƠNG TRÌNH</h1>
                    <p>
                        Nơi chiến tuyến, đâu đó vẫn len lỏi những mối tình nồng nàn, và ở đây tác giả đã tái hiện một
                        chuyện tình đượm đạm màu chia ly. Bên cạnh mối tình nơi chiến tuyến, vở “Người tình trên chiến
                        tuyến” cũng lột tả về câu chuyện gia đình, tình cảm máu mủ lấy biết bao nước mắt của khán giả để
                        rồi vở tuồng này vẫn trường tồn với thời gian.
                    </p>
                    <button className="button">ĐỌC THÊM</button>
                </div>
                <div className="column1__bot">
                    <div className="p-r">
                        <img src={img3} alt="" />
                        <div className="desc__program">
                            <h3>LỤC VÂN TIÊN</h3>
                            <p>08/11/2022</p>
                            <p>
                                Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh
                                Văn Ngà.
                            </p>
                            <button className="button">ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column2">
                <div className="column2__top">
                    <div className="p-r">
                        <img src={img1} alt="" />
                        <div className="desc__program">
                            <h3>NGƯỜI TÌNH TRÊN CHIẾN TRẬN</h3>
                            <p>11/11/2022</p>
                            <p>
                                Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh
                                Văn Ngà.
                            </p>
                            <button className="button">ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
                <div className="column2__bot">
                    <div className="p-r">
                        <img src={img4} alt="" />
                        <div className="desc__program">
                            <h3>BÊN CẦU DỆT LỤA</h3>
                            <p>09/11/2022</p>
                            <p>
                                Được soạn bởi cố tác giả Thế Châu. Đó là câu chuyện cảm động về nàng tiểu thơ Quỳnh Nga.
                            </p>
                            <button className="button">ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column3">
                <div className="column3__top">
                    <div className="p-r">
                        <img src={img2} alt="" />
                        <div className="desc__program">
                            <h3>MỘC QUẾ ANH DÂNG CÂY</h3>
                            <p>12/11/2022</p>
                            <p>
                                Mộc Quế Anh vốn là tiểu thư nhà họ Mộc - con gái độc nhất của Mộc Thiên Vương một tướng
                                quan nhà Tống, nhan sắc nàng kiêu sa đài các lại thêm văn võ song toàn,
                            </p>
                            <button className="button">ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
                <div className="column3__bot">
                    <div className="p-r">
                        <img src={img5} alt="" />
                        <div className="desc__program">
                            <h3>KIẾP NÀO CÓ YÊU NHAU</h3>
                            <p>10/11/2022</p>
                            <p>
                                Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh
                                Văn Ngà.
                            </p>
                            <button className="button">ĐẶT VÉ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramBody;
