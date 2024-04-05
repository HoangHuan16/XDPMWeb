import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { updateDiem } from "../../services/diemService";
import { fetchAllSinhVien } from "../../services/SinhVienService";
import { fetchAllLophoc } from "../../services/LophocService";
import { fetchAllMonhoc } from "../../services/MonhocServiec";
import { toast } from "react-toastify";

const UpdateDiemComponent = (props) => {
  const { showModal, handleClose, updateData, listDiem } = props;

  const [listSV, setListSV] = useState([]);
  const [listMonHoc, setListMonHoc] = useState([]);

  const [ten, setTen] = useState("");
  const [monHoc, setMonHoc] = useState("");
  const [diem, setDiem] = useState(0);

  //   useEffect(() => {
  //     if (showModal) {
  //       setDiem(updateData.diem);
  //     }
  //   }, [updateData]);
  //   useEffect(() => {}, []);

  useEffect(() => {
    getAllSV();
    getAllMonHoc();
  }, []);

  useEffect(() => {
    if (showModal) {
      setTen(updateData.ten);
      setMonHoc(updateData.tenMH);
      setDiem(updateData.diem);
    }
  }, [updateData]);

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
    const newDiem = { ten, monHoc, diem };
    await updateDiem(listDiem.id, newDiem).then((res) => {
      if (res) {
        handleClose();
        listDiem();
        toast.success("Update thành công");
      }
    });
  };
  return (
    <div className="container">
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm điểm</Modal.Title>
          <Modal.Body>
            <form method="post">
              <div className="form-group">
                <div className="mb-3">
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={() => console.log("hello")}>
              Thêm
            </Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default UpdateDiemComponent;
