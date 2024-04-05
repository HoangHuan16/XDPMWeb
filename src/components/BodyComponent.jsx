import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function BodyComponent() {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h1>Thong tin quan ly dao tao</h1>
                    <ul>
                        <li><a href="#">QUY ĐỊNH - QUY CHẾ</a></li>
                        <li><a href="#">KIỂM ĐỊNH CƠ SỞ GIÁO DỤC VÀ CHƯƠNG TRÌNH ĐÀO TẠO</a></li>
                        <li><a href="#">NỘI QUY</a></li>
                        <li><a href="#">HƯỚNG DẪN VÀ QUY TRÌNH</a></li>
                        <li><a href="">BIỂU MẪU</a></li>
                        <li><a href="">BIỂU ĐỒ GIẢNG DẠY HỌC TẬP</a></li>
                        <li><a href="">CHƯƠNG TRÌNH ĐÀO TẠO</a></li>
                        <li><a href="">NIÊN GIÁM</a></li>
                        <li><a href="">SỔ TAY ĐĂNG KÝ MÔN HỌC</a></li>
                        <li><a href="">THÔNG TIN CÔNG KHAI</a></li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h3>Thông báo mới nhất</h3>
                    <ul>
                        <li><a href="#">Lịch học tuần mới</a></li>
                        <li><a href="#">Cuộc thi viết văn</a></li>
                        <li><a href="#">Hướng dẫn đăng ký học phần</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default BodyComponent;
