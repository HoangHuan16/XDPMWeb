import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import {getMonhoc , themMon, updateMon } from "../../services/MonhocServiec";

const ThemMonComponent = (props) =>{
    const {handleClose, show, listMonhoc} = props
    const [tenMH, setTenMon] = useState('');
    const [ soTc, setSoTc] = useState('');


    const handleSaveMon = async () =>{
        const mon = {tenMH, soTc}
        let res = await themMon(mon);
        if(res){
            handleClose();
            listMonhoc();
            setTenMon('');
            setSoTc('');
            toast.success("Them Thanh cong")
        }else{
            toast.error("Lỗi")
        }
    }

    return(
        <>
            <Modal
                 show={show}
                 onHide={handleClose}
                 backdrop="static"
                 keyboard={false}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Thêm Mon Hoc</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Ten mon hoc</label>
                            <input
                                value= {tenMH}
                                type="text"
                                className="form-control"
                                onChange={event => setTenMon(event.target.value)}
                            />
                            <label className='form-label'>So tin chi</label>
                            <select className='form-select' value={soTc} onChange={event => setSoTc(event.target.value)}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>

                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveMon()}>Save</Button>
                </Modal.Footer>
            </Modal>
        
        </>
    )
}
export default ThemMonComponent