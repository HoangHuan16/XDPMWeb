import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { DeleteMon, fetchAllMonhoc } from "../../services/MonhocServiec";
import { toast } from 'react-toastify';
import ThemMonComponent from "./ThemMonComponent";
import UpdateMonComponent from "./UpdateMonComponent";
const MonhocComponent = (props) => {
    const [showModal, setShowModal] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});
    const [ModalUpdate, setModalUpdate] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setModalUpdate(false);
    };
    const [monhocs, setMonhoc] = useState([]);
    useEffect(() => {
        listMonhoc();
    }, [])

    function listMonhoc() {
        fetchAllMonhoc().then(response => {
            setMonhoc(response.data);
        }).catch(
            error => {
                console.log(error);
            }
        )
    }

    function Delete(id) {
        if (window.confirm("Bạn có chắc muốn xóa không?")) {
            DeleteMon(id)
                .then(rp => {
                    listMonhoc();
                    toast.success("xóa thành công")
                    //alert("Đã xóa thành công.");
                })
                .catch(error => {
                    if (error.response && error.response.status === 500) {
                        toast.error("Không thể xóa vì khóa không tồn tại hoặc có dữ liệu liên quan.")
                        //alert("Không thể xóa vì khóa không tồn tại hoặc có dữ liệu liên quan.");
                    }
                });
        }
    }
    const UpdateMonhoc = (mon) => {
        setDataUpdate(mon);
        setModalUpdate(true);
        console.log(mon);
    }

    return (
        <>
            <div className="my-3 them_monhoc">
                <span><b>Them Mon hoc:</b></span>
                <button className="btn btn-success" onClick={() => setShowModal(true)} >Them</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ten mon hoc</th>
                        <th>So tin chi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        monhocs.map((mon) =>
                            <tr key={mon.idMH}>
                                <td>{mon.tenMH}</td>
                                <td>{mon.soTc}</td>
                                <td>
                                    <button onClick={() => Delete(mon.idMH)} className='btn btn-danger ms-2'>Delete</button>
                                    <button onClick={() => UpdateMonhoc(mon)} className='btn btn-success ms-2'>Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <ThemMonComponent
                show={showModal}
                handleClose={handleClose}
                listMonhoc={listMonhoc}
            />

            <UpdateMonComponent
                show={ModalUpdate}
                handleClose={handleClose}
                listMonhoc={listMonhoc}
                dataUpdate={dataUpdate}
            />

        </>
    )


}

export default MonhocComponent