import { Container, Row, Col } from 'react-bootstrap';
function FooterComponent() {
    return (
        <footer className="bg-body-tertiary" style={{ backgroundColor: 'rgb(78, 78, 130)' }}>
            <Container>
                <Row>
                    {/* First column */}
                    <Col md={3}>
                        <h5>KHOA ĐÀO TẠO</h5>
                        <ul>
                            <li>Khoa Công Nghệ Thông Tin</li>
                            <li>Khoa Kỹ Thuật Công Trình</li>
                            {/* Add other departments here */}
                        </ul>
                    </Col>

                    {/* Second column */}
                    <Col md={3}>
                        <h5>TUYỂN SINH</h5>
                        <ul>
                            <li>Trình độ thạc sĩ</li>
                            <li>Tuyển sinh đại học</li>
                            {/* Add other admission-related links here */}
                        </ul>
                    </Col>

                    {/* Third column */}
                    <Col md={3}>
                        <h5>SINH VIÊN</h5>
                        <ul>
                            <li>Tra cứu điều kiện tốt nghiệp</li>
                            <li>Biểu mẫu</li>
                            <li>Cổng thông tin đào tạo</li>
                            {/* Add other student-related links here */}
                        </ul>
                    </Col>

                    {/* Fourth column */}
                    <Col md={3}>
                        <h5>TÍNH NĂNG THƯỜNG DỤNG</h5>
                        <ul>
                            <li>  Đăng nhập</li>
                            <li>  Email: info@example.com</li>
                            <li>  Đường đến STU</li>
                            {/* Add other utility links here */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
