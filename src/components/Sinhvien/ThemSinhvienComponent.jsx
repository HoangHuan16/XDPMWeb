import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addSv } from '../../services/SinhVienService';
import { fetchAllLophoc } from '../../services/LophocService';

const ThemSinhvienComponent = (props) => {

    const { handleClose, show, listSv } = props;
    const [ten, setTen] = useState('');
    const [email, setEmail] = useState('');
    const [soDienThoai, setSdt] = useState('');
    const [diaChi, setDiachi] = useState('');
    const [selectedLop, setSelectedLop] = useState('');
    const [danhSachLop, setDanhSachLop] = useState([]);

    const handleSaveSv = async () => {
        const sv = { ten, email, soDienThoai, diaChi, lophoc: { malop: selectedLop } };
        try {
            const res = await addSv(sv);
            if (res) {
                handleClose();
                listSv();
                setTen('');
                setEmail('');
                setSdt('');
                setDiachi('');
                setSelectedLop('');
                toast.success("Thêm Thành công");
            } else {
                toast.error("Lỗi");
            }
        } catch (error) {
            console.error('Error saving sinh vien:', error);
            toast.error("Lỗi");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllLophoc();
                setDanhSachLop(response.data); 
            } catch (error) {
                console.error('Error fetching lop hoc:', error);
                toast.error("Lỗi khi tải danh sách lớp học");
            }
        };
        fetchData();
    }, []);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Thêm Sinh Viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="mb-1">
                        <label className="form-label">Tên:</label>
                        <input
                            value={ten}
                            type="text"
                            className="form-control"
                            onChange={event => setTen(event.target.value)}
                        />
                        <label className="form-label">Email:</label>
                        <input
                            value={email}
                            type="text"
                            className="form-control"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <label className="form-label">Số điện thoại:</label>
                        <input
                            value={soDienThoai}
                            type="text"
                            className="form-control"
                            onChange={event => setSdt(event.target.value)}
                        />
                        <label className="form-label">Địa chỉ:</label>
                        <input
                            value={diaChi}
                            type="text"
                            className="form-control"
                            onChange={event => setDiachi(event.target.value)}
                        />
                        <label className="form-label">Tên lớp:</label>
                        <select
                            value={selectedLop}
                            className="form-control"
                            onChange={event => setSelectedLop(event.target.value)}
                        >
                            <option value="">Chọn lớp</option>
                            {danhSachLop.map(lop => (
                                <option key={lop.malop} value={lop.malop}>{lop.tenlop}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveSv}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ThemSinhvienComponent;
