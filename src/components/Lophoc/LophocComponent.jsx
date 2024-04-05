import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { DeleteLop, fetchAllLophoc, updateLop } from '../../services/LophocService';
import { toast } from 'react-toastify';
import ThemLopComponent from './ThemLopComponent';
import UpdateLopComponent from './UpdateLopComponent';

const LophocComponent = (props) => {


    // modal thêm lớp học
    const [showModal, setShowModal] = useState(false);

    //modal update
    const [dataUpdate, setDataUpdate] = useState({});
    const [ModalUpdate, setModalUpdate] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setModalUpdate(false);
    };

    const [lophocs, setLophoc] = useState([]);

    useEffect(() => {
        listLophoc();
    }, [])

    function listLophoc() {
        fetchAllLophoc().then(response => {
            setLophoc(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function Delete(id) {
        if (window.confirm("Bạn có chắc muốn xóa không?")) {
            DeleteLop(id)
                .then(rp => {
                    listLophoc();
                    toast.success("xóa thành công")
                })
                .catch(error => {
                    if (error.response && error.response.status === 500) {
                        toast.error("Không thể xóa vì khóa không tồn tại hoặc có dữ liệu liên quan.")
                    }
                });
        }
    }

    const UpdateLophoc = (lop) => {
        setDataUpdate(lop);
        setModalUpdate(true);
        console.log(lop);
    }
    return (
        <>
            <div className='my-3 them_lop'>
                <span><b>Thêm lớp học:</b></span>
                <button className='btn btn-success' onClick={() => setShowModal(true)}>Thêm lớp học</button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên Lớp</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lophocs.map((lop) =>
                            <tr key={lop.malop}>
                                <td>{lop.tenlop}</td>
                                <td>
                                    <button onClick={() => Delete(lop.malop)} className='btn btn-danger ms-2'>Delete</button>
                                    <button onClick={() => UpdateLophoc(lop)} className='btn btn-success ms-2'>Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <ThemLopComponent
                show={showModal}
                handleClose={handleClose}
                listLophoc={listLophoc}
            />

            <UpdateLopComponent
                show={ModalUpdate}
                handleClose={handleClose}
                listLophoc={listLophoc}
                dataUpdate={dataUpdate}
            />
        </>
    )
}

export default LophocComponent
