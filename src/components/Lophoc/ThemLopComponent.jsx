import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getLophoc, themlop, updateLop } from '../../services/LophocService';
import { toast } from 'react-toastify';

const ThemLopComponent = (props) => {

    const { handleClose, show, listLophoc } = props
    const [tenlop, setTenLop] = useState('');

    const handleSaveLop = async () => {
        const lop = {tenlop}
        let res = await themlop(lop);
        if (res) {
            handleClose();
            listLophoc();
            setTenLop('');
            toast.success("Thêm thành công")
        } else {
            toast.error("Lỗi")
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm lớp học</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                value={tenlop}
                                type="text"
                                className="form-control"
                                onChange={event => setTenLop(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveLop()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ThemLopComponent
