import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { DeleteSv, fetchAllSinhVien, updateSv } from "../../services/SinhVienService";
import ThemSinhvienComponent from "./ThemSinhvienComponent";
import UpdateSinhvienComponent from "./UpdateSinhvienComponent";
const SinhvienComponent = (props) => {

    const [showModal, setShowModal] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});
    const [ModalUpdate, setModalUpdate] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setModalUpdate(false);
    };
    const [sinhviens, setSinhvien] = useState([]);
    useEffect(() => {
        listSv();
    }, [])
    function listSv() {
        fetchAllSinhVien().then(response => {
            setSinhvien(response.data);
        }).catch(
            error => {
                console.log(error);
            }
        )
    }
    function Delete(idsinhvien) {
        if (window.confirm("Bạn có chắc muốn xóa không?")) {
            DeleteSv(idsinhvien)
                .then(rp => {
                    listSv();
                    toast.success("xóa thành công")
                })
                .catch(error => {
                    if (error.response && error.response.status === 500) {
                        toast.error("Không thể xóa vì khóa không tồn tại hoặc có dữ liệu liên quan.")
                    }
                });
        }
    }
    const UpdateSinhvien = (sv) => {
        setDataUpdate(sv);
        setModalUpdate(true);
        console.log(sv);
    }

    return (
        <>
            <div className="my-3 them_monhoc">
                <button className="btn btn-success" onClick={() => setShowModal(true)} >Thêm sinh viên</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <th>Địa chỉ</th>
                        <th>Tên lớp </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sinhviens.map((sv) =>
                            <tr key={sv.idsinhvien}>
                                <td>{sv.ten}</td>
                                <td>{sv.email}</td>
                                <td>{sv.soDienThoai}</td>
                                <td>{sv.diaChi}</td>
                                <td>{sv.lophoc ? sv.lophoc.tenlop : ''}</td>
                                <td>
                                    <button onClick={() => Delete(sv.idsinhvien)} className='btn btn-danger ms-2'>Delete</button>
                                    <button onClick={() => UpdateSinhvien(sv)} className='btn btn-success ms-2'>Update</button>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>

            <ThemSinhvienComponent
                show={showModal}
                handleClose={handleClose}
                listSv={listSv}
            />

            <UpdateSinhvienComponent
                show={ModalUpdate}
                handleClose={handleClose}
                listSv={listSv}
                dataUpdate={dataUpdate}
            />

        </>
    )

}

export default SinhvienComponent