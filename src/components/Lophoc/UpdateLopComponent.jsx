import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getLophoc, themlop, updateLop } from '../../services/LophocService';
import { toast } from 'react-toastify';

const UpdateLopComponent = (props) => {

    const { handleClose, show, listLophoc, dataUpdate } = props
    const [tenlop, setTenLop] = useState('');

    const handleUpdate = async () => {
        const lop = {tenlop};
        let res = await updateLop(dataUpdate.malop, lop);

        if (res) {
            handleClose();
            listLophoc();
            setTenLop('');
            toast.success("Update thành công")
        } else {
            toast.error("lỗi")
        }

        //console.log(lop);
    }
    //console.log("check props "+ dataUpdate.malop);


    useEffect(()=>{
        if(show){
            setTenLop(dataUpdate.tenlop);
        }
    }, [dataUpdate])
    

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update lớp học</Modal.Title>
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
                    <Button variant="primary" onClick={() => handleUpdate()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateLopComponent
