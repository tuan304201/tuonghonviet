import React from "react";
import "./Product.css";
import p1 from "../../image/p1.jpg";
import p2 from "../../image/p2.jpg";
import p3 from "../../image/p3.jpg";

const Product = () => {
    return (
        <div className="container__product">
            <div className="top__product">
                <div className="card__infor">
                    <h3>LỤC VÂN TIÊN</h3>
                    <p>
                        Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn Ngà.
                    </p>
                </div>
                <div className="card__infor">
                    <h3>BÊN CẦU DỆT LỤA</h3>
                    <p>Được soạn bởi cố tác giả Thế Châu. Đó là câu chuyện cảm động về nàng tiểu thơ Quỳnh Nga.</p>
                </div>
                <div className="card__infor">
                    <h3>KIẾP NÀO CÓ YÊU NHAU</h3>
                    <p>
                        Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn Ngà.
                    </p>
                </div>
                <div className="card__infor">
                    <h3>KIẾP NÀO CÓ YÊU NHAU</h3>
                    <p>
                        Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn Ngà.
                    </p>
                </div>
            </div>
            <div className="bot__product">
                <div className="card__image">
                    <img src={p1} alt="" />
                    <div className="desc__product">
                        <h2>LỤC VÂN TIÊN</h2>
                        <h3>08/11/2022</h3>
                        <p>
                            Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn
                            Ngà.
                        </p>
                    </div>
                </div>

                <div className="card__image">
                    <img src={p2} alt="" />
                    <div className="desc__product">
                        <h2>BÊN CẦU DỆT LỤA</h2>
                        <h3>09/11/2022</h3>
                        <p>Được soạn bởi cố tác giả Thế Châu. Đó là câu chuyện cảm động về nàng tiểu thơ Quỳnh Nga.</p>
                    </div>
                </div>

                <div className="card__image">
                    <img src={p3} alt="" />
                    <div className="desc__product">
                        <h2>KIẾP NÀO CÓ YÊU NHAU</h2>
                        <h3>10/11/2022</h3>
                        <p>
                            Lòng mến mộ đặc biệt với thơ Lục Vân Tiên của Nguyễn Đình Chiểu đã thôi thúc ông Huỳnh Văn
                            Ngà.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
