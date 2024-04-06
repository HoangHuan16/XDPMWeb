import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { fetchAllDiem, themDiem, updateDiem } from "../../services/diemService";
import axios from "axios";
const API_URL = "http://localhost:8080/api/diem";

const Diem = () => {
  const [diemList, setDiemList] = useState([]);
  const [sinhVienList, setSinhVienList] = useState([]);
  const [monHocList, setMonHocList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDiem, setNewDiem] = useState({});
  const [selectedDiem, setSelectedDiem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchAllDiem();
      setDiemList(response.data);
      setSinhVienList(response.data.map((diem) => diem.sinhVien));
      setMonHocList(response.data.map((diem) => diem.monhoc));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddDiem = async () => {
    try {
      await themDiem(newDiem);
      setNewDiem({});
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error("Error adding diem:", error);
    }
  };

  const handleEditClick = (diem) => {
    setSelectedDiem(diem);
    setShowModal(true);
  };

  const handleEditDiem = async () => {
    try {
      await updateDiem(selectedDiem.id, selectedDiem);
      setShowModal(false);
      setSelectedDiem(null);
      fetchData();
    } catch (error) {
      console.error("Error updating diem:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDiem(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedDiem({ ...selectedDiem, [name]: value });
  };

  return (
    <div className="container mt-4">
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Thêm Điểm
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sinh viên</th>
            <th>Môn học</th>
            <th>Điểm</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {diemList.map((diem) => (
            <tr key={diem.id}>
              <td>{diem.id}</td>
              <td>{diem.sinhVien.ten}</td>
              <td>{diem.monhoc.tenMH}</td>
              <td>{diem.diem}</td>
              <td>
                <Button variant="info" onClick={() => handleEditClick(diem)}>
                  Sửa Điểm
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm/Sửa Điểm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formSinhVien">
              <Form.Label>Sinh viên:</Form.Label>
              <Form.Control
                as="select"
                name="sinhVien"
                value={selectedDiem?.sinhVien.id || ""}
                onChange={handleChange}
                disabled={!!selectedDiem}
              >
                <option value="">{selectedDiem?.sinhVien.ten}</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMonHoc">
              <Form.Label>Môn học:</Form.Label>
              <Form.Control
                as="select"
                name="monhoc"
                value={selectedDiem?.monhoc.id || ""}
                onChange={handleChange}
                disabled={!!selectedDiem}
              >
                <option value="">{selectedDiem?.monhoc.tenMH}</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDiemInput">
              <Form.Label>Điểm:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập điểm"
                name="diem"
                value={selectedDiem?.diem || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
          <Button
            variant="primary"
            onClick={selectedDiem ? handleEditDiem : handleAddDiem}
          >
            {selectedDiem ? "Lưu" : "Thêm"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Diem;
