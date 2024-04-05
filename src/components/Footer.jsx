import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

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
                            <li><FontAwesomeIcon icon={faLock} /> Đăng nhập</li>
                            <li><FontAwesomeIcon icon={farEnvelope} /> Email: info@example.com</li>
                            <li><FontAwesomeIcon icon={faGlobe} /> Đường đến STU</li>
                            {/* Add other utility links here */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
