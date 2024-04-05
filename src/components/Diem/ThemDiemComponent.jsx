import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { fetchAllMonhoc } from "../../services/MonhocServiec";
import { fetchAllSinhVien } from "../../services/SinhVienService";
import { themDiem } from "../../services/diemService";
import { toast } from "react-toastify";

const ThemDiemComponent = (props) => {
  const { showModal, handleCloseModal, listDiem } = props;
  const [idSV, setIDSV] = useState("");
  const [idMH, setIDMH] = useState("");
  const [listMonHoc, setListMonHoc] = useState([]);
  const [listSinhVien, setListSinhVien] = useState([]);

  const [diem, setDiem] = useState(0);

  useEffect(() => {
    getMonHoc();
    getSinhVien();
  }, []);
  const getSinhVien = async () => {
    try {
      await fetchAllSinhVien().then((res) => {
        setListSinhVien(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getMonHoc = async () => {
    try {
      await fetchAllMonhoc().then((res) => {
        setListMonHoc(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddDiem = async () => {
    const bangdiem = { idMH, idSV, diem };
    await themDiem(bangdiem).then((res) => {
      if (res) {
        handleCloseModal();
        listDiem();
        setIDMH("");
        setIDSV("");
        setDiem(0);
        toast.success("Thêm thành công");
      } else {
        toast.error("Lỗi");
      }
    });
  };
  return (
    <div className="container">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm điểm</Modal.Title>
          <Modal.Body>
            <form method="post">
              <div className="form-group">
                <div className="mb-3">
                  <label className="form-label">Môn học:</label>
                  <select
                    value={idMH}
                    onChange={(e) => setIDMH(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Chọn môn học</option>
                    {listMonHoc.map((mon) => (
                      <option key={mon.idMH} value={mon.idMH}>
                        {mon.tenMH}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Sinh viên:</label>
                  <select
                    value={idSV}
                    onChange={(e) => setIDSV(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Chọn sinh viên</option>
                    {listSinhVien.map((sv) => (
                      <option key={sv.idsinhvien} value={sv.idsinhvien}>
                        {sv.ten}
                      </option>
                    ))}
                  </select>
                </div>
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
            <Button variant="secondary" onClick={handleCloseModal}>
              Đóng
            </Button>
            <Button variant="primary" onClick={() => handleAddDiem()}>
              Thêm
            </Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default ThemDiemComponent;

// import React, { useEffect, useState } from "react";
// import { fetchAllDiem, themDiem } from "../../services/diemService";
// import { Modal, Button } from "react-bootstrap";
// import { fetchAllMonhoc } from "../../services/MonhocServiec";
// import { fetchAllSinhVien } from "../../services/SinhVienService";

// const ThemDiemComponent = () => {
//   const [diem, setDiem] = useState("");
//   const [sinhVien, setSinhVien] = useState("");
//   const [monhoc, setMonHoc] = useState("");

//   //const { id } = useParams();

//   //select Option
//   const [diems, setDiems] = useState([]);
//   useEffect(() => {
//     listDiem();
//   }, []);

//   function listDiem() {
//     fetchAllDiem()
//       .then((response) => {
//         setDiems(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   function handleChangeMonHoc(event) {
//     const selectedMonhoc = event.target.value;
//     setMonHoc(selectedMonhoc);
//   }

//   function handleChangeSinhVien(event) {
//     const selectedSinhVien = event.target.value;
//     setSinhVien(selectedSinhVien);
//   }

//   //chưa trả về trang trước khi nhấn hủy
//   function handleCancel() {
//     //navigator('/lophoc')
//   }

//   return (
//     <div className="container">
//       <br /> <br />
//       <div className="row">
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <div className="card-body">
//             <form action="">
//               <div className="form-group mb-2">
//                 <label className="form-label">Mon hoc:</label>
//                 <select value={monhoc} onChange={handleChangeMonHoc}>
//                   <option
//                     onChange={(e) => setMonHoc(e.target.value)}
//                     disabled
//                     value=""
//                   >
//                     Select
//                   </option>
//                   {diems.map((diem) => (
//                     <option key={diem.id} value={diem.id}>
//                       {diem.monhoc.tenMH}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label">Sinh vien:</label>
//                 <select value={sinhVien} onChange={handleChangeSinhVien}>
//                   <option
//                     onChange={(e) => setSinhVien(e.target.value)}
//                     disabled
//                     value=""
//                   >
//                     Select
//                   </option>
//                   {diems.map((diem) => (
//                     <option key={diem.id} value={diem.id}>
//                       {diem.sinhVien.ten}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label">Diem:</label>
//                 <input
//                   type="diem"
//                   placeholder="Enter diem"
//                   name="diem"
//                   value={diem.diem}
//                   onChange={(e) => setDiem(e.target.value)}
//                 />
//               </div>

//               <div className="btn btn-success">Submit</div>
//               {/* onClick={saveOrUpdateEmployee} */}
//               <span className="px-3" />
//               <button onClick={() => handleCancel} className="btn btn-danger">
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemDiemComponent;

// const ThemDiemComponent = (props) => {
//   const { showModal, handleClose, listDiem } = props;
//   const [diem, setDiem] = useState(0);
//   const [sinhVien, setSinhVien] = useState("");
//   const [listMonHoc, setListMonHoc] = useState([]);
//   const [listSinhVien, setListSinhVien] = useState([]);
//   const [monhoc, setMonHoc] = useState("");

//   //const { id } = useParams();

//   //select Option
//   const [diems, setDiems] = useState([]);
//   useEffect(() => {
//     getSinhVien();
//     getMonHoc();
//   }, []);

//   function getMonHoc() {
//     try {
//       fetchAllMonhoc().then((res) => {
//         setListMonHoc(res.data);
//         console.log(res.data);
//       });
//     } catch (error) {
//       throw error("Có lỗi khi lấy danh sách các môn học");
//     }
//   }

//   function getSinhVien() {
//     try {
//       fetchAllSinhVien().then((res) => {
//         setListSinhVien(res.data);
//         console.log(res.data);
//       });
//     } catch (error) {
//       throw error("Có lỗi khi lấy thông tin của các sinh viên");
//     }
//   }

//   function getDiem() {
//     fetchAllDiem()
//       .then((response) => {
//         setDiems(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   function handleChangeMonHoc(event) {
//     const selectedMonhoc = event.target.value;
//     setMonHoc(selectedMonhoc);
//   }

//   function handleChangeSinhVien(event) {
//     const selectedSinhVien = event.target.value;
//     setSinhVien(selectedSinhVien);
//   }

//   //chưa trả về trang trước khi nhấn hủy
//   function handleCancel() {
//     navigator("/lophoc");
//   }
//   const addDiem = async (score) => {
//     const diem1 = {
//       diem,
//       monhoc: { maMH: listMonHoc },
//       sinhvien: { idsinhvien: listSinhVien },
//     };
//     await themDiem(diem1).then((res) => {
//       if (res) {
//         handleClose();
//         listDiem();
//         setDiem(0);
//         setMonHoc("");
//         setSinhVien("");
//       }
//     });
//   };
//   return (
//     <div className="container">
//       <br /> <br />
//       <div className="row">
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <div className="card-body">
//             <form action="/add-diem" method="post">
//               <div className="form-group mb-2">
//                 <label className="form-label">Mon hoc:</label>
//                 <select value={monhoc} onChange={handleChangeMonHoc}>
//                   <option
//                     onChange={(e) => setMonHoc(e.target.value)}
//                     disabled
//                     value=""
//                   >
//                     Select
//                   </option>
//                   {diems.map((diem) => (
//                     <option key={diem.id} value={diem.id}>
//                       {diem.monhoc.tenMH}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label">Sinh vien:</label>
//                 <select value={sinhVien} onChange={handleChangeSinhVien}>
//                   <option
//                     onChange={(e) => setSinhVien(e.target.value)}
//                     value=""
//                   >
//                     Select
//                   </option>
//                   {diems.map((diem) => (
//                     <option key={diem.id} value={diem.id}>
//                       {diem.sinhVien.ten}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label">Diem:</label>
//                 <input
//                   type="number"
//                   placeholder="Enter diem"
//                   name="diem"
//                   value={diem.diem}
//                   onChange={(e) => setDiem(e.target.value)}
//                   min="0"
//                   max="10"
//                 />
//               </div>

//               <div className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</div>

//               <span className="px-3" />
//               <button onClick={() => handleCancel} className="btn btn-danger">
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <>
//     //   <Modal show={showModal} onClose={handleClose} backdrop="static">
//     //     <Modal.Header closeButton>
//     //       <Modal.Title>Thêm điểm</Modal.Title>
//     //       <Modal.Body>
//     //         <div>
//     //           <p>This is modal</p>
//     //         </div>
//     //       </Modal.Body>
//     //       <Modal.Footer>
//     //         <Button variant="secondary" onClick={handleClose}>
//     //           Đóng
//     //         </Button>
//     //         <Button variant="primary">Thêm</Button>
//     //       </Modal.Footer>
//     //     </Modal.Header>
//     //   </Modal>
//     // </>
//   );
// };

// export default ThemDiemComponent;
