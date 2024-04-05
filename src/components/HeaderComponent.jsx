import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

function HeaderComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">STU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Trang Chủ</Nav.Link>
                        <Nav.Link href="#">Giới Thiệu</Nav.Link>
                        <Nav.Link href="#">Chương Trình Học</Nav.Link>
                        <Nav.Link href="#">Liên Hệ</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="Tài khoản" className="me-2" />
                        <FormControl type="password" placeholder="Mật khẩu" className="me-2" />
                        <Button variant="outline-success">Đăng nhập</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;
