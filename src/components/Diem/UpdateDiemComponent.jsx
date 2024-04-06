import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { updateDiem } from "../../services/diemService";
import { fetchAllSinhVien } from "../../services/SinhVienService";
import { fetchAllLophoc } from "../../services/LophocService";
import { fetchAllMonhoc } from "../../services/MonhocServiec";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";

const UpdateDiemComponent = (props) => {
  const { showUpdateModal, handleCloseModal, updateData, listDiem } = props;
  const [listSV, setListSV] = useState([]);
  const [listMonHoc, setListMonHoc] = useState([]);
  const [idSV, setIdSV] = useState("");
  const [idMH, setIdMH] = useState("");
  const [diem, setDiem] = useState(0);

  useEffect(() => {
    getAllMonHoc();
    getAllSV();
  }, []);

  useEffect(() => {
    if (showUpdateModal && updateData) {
      setIdSV(updateData.sinhVien.idsinhvien); //ten
      setIdMH(updateData.monhoc.idMH); //mon hoc
      setDiem(updateData.diem);
    }
  }, [showUpdateModal, updateData]);
  const getAllMonHoc = async () => {
    await fetchAllMonhoc().then((res) => {
      setListMonHoc(res.data);
    });
  };
  const getAllSV = async () => {
    await fetchAllSinhVien().then((res) => {
      setListSV(res.data);
      console.log(res.data);
    });
  };
  const handleUpdateDiem = async () => {
    const newDiem = { idMH, idSV, diem };
    await updateDiem(updateData.sinhVien.idsinhvien, newDiem).then((res) => {
      if (res) {
        handleCloseModal();
        listDiem();
        toast.success("Update thành công");
      }
    });
  };
  // return (
  //   <div className="container">
  //     <Modal show={showUpdateModal} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>Thêm điểm</Modal.Title>
  //         <Modal.Body>
  //           <form method="post">
  //             <div className="form-group">
  //               <div className="mb-3">
  //                 <label className="form-label">Điểm:</label>
  //                 <input
  //                   type="number"
  //                   value={diem}
  //                   onChange={(e) => setDiem(e.target.value)}
  //                   className="form-control"
  //                   min="0"
  //                   max="10"
  //                 />
  //               </div>
  //             </div>
  //           </form>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleClose}>
  //             Đóng
  //           </Button>
  //           <Button variant="primary" onClick={() => console.log("hello")}>
  //             Thêm
  //           </Button>
  //         </Modal.Footer>
  //       </Modal.Header>
  //     </Modal>
  //   </div>
  // );
  return (
    <div className="container">
      <Modal show={showUpdateModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật điểm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-1">
              <label className="form-label">Tên sinh viên</label>
              <select
                value={idSV}
                className="form-control"
                onChange={(event) => setIdSV(event.target.value)}
              >
                <option value="">Chọn sinh viên</option>
                {listSV.map((sv) => (
                  <option key={sv.idsinhvien} value={sv.idsinhvien}>
                    {sv.ten}
                  </option>
                ))}
              </select>
              <select
                value={idMH}
                className="form-control"
                onChange={(event) => setIdMH(event.target.value)}
              >
                <option value="">Chọn môn học</option>
                {listMonHoc.map((mh) => (
                  <option key={mh.idMH} value={mh.idMH}>
                    {mh.tenMH}
                  </option>
                ))}
              </select>
              <label className="form-label">Điểm:</label>
              <input
                type="number"
                value={diem}
                onChange={(e) => setDiem(e.target.value)}
                className="form-control"
                min="0"
                max="10"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleUpdateDiem}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateDiemComponent;
