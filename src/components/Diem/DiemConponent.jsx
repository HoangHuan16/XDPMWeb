import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllDiem } from "../../services/diemService";
import ThemDiemComponent from "./ThemDiemComponent";
import UpdateDiemComponent from "./UpdateDiemComponent";

const DiemConponent = (props) => {
  const [diems, setDiem] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const updateDiem = (diem) => {
    setDataUpdate(diem);
    setShowUpdateModal(true); // Hiển thị modal sửa điểm
  };

  useEffect(() => {
    listDiem();
  }, []);

  const listDiem = () => {
    fetchAllDiem()
      .then((response) => {
        setDiem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="my-3 them_diem">
        <span>
          <b>Thêm Điểm:</b>
        </span>
        <button
          type="button"
          onClick={handleOpenModal}
          className="btn btn-success"
        >
          Thêm Điểm
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>sinh vien</th>
            <th>mon hoc</th>
            <th>diem</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {diems.map((diem) => (
            <tr key={diem.id}>
              <td>{diem.id}</td>
              <td>{diem.sinhVien?.ten}</td>
              <td>{diem.monhoc.tenMH}</td>
              <td>{diem.diem}</td>
              <td>
                <button
                  className="btn btn-success ms-2"
                  onClick={() => updateDiem(diem)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ThemDiemComponent
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        listDiem={listDiem}
      />
      <UpdateDiemComponent
        showUpdateModal={showUpdateModal}
        handleCloseModal={handleCloseModal}
        listDiem={listDiem}
        dataUpdate={dataUpdate}
      />
    </div>
  );
};

export default DiemConponent;

// import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import { useNavigate } from "react-router-dom";
// import { fetchAllDiem } from "../../services/diemService";
// import ThemDiemComponent from "./ThemDiemComponent";
// const DiemConponent = (props) => {
//   const [diems, setDiem] = useState([]);
//   const [showModal, setModalState] = useState(false);
//   const [showModalUpdate, setShowModalUpdate] = useState(false);
//   const navigator = useNavigate();

//   useEffect(() => {
//     listDiem();
//   }, []);

//   const handleClose = () => {
//     setModalState(false);
//     setShowModalUpdate(false);
//   };
//   const handleOpenModal = () => {
//     setModalState(true);
//   };
//   function listDiem() {
//     fetchAllDiem()
//       .then((response) => {
//         setDiem(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   //   function addDiem() {
//   //     navigator("/diem");
//   //   }

//   return (
//     <div>
//       <div className="my-3 them_diem">
//         <span>
//           <b>Thêm Điểm:</b>
//         </span>
//         <button
//           type="button"
//           onClick={handleOpenModal}
//           className="btn btn-success"
//         >
//           Thêm Điểm
//         </button>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>sinh vien</th>
//             <th>mon hoc</th>
//             <th>diem</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {diems.map((diem) => (
//             <tr key={diem.id}>
//               <td>{diem.id}</td>
//               <td>{diem.sinhVien?.ten}</td>
//               <td>{diem.monhoc.tenMH}</td>
//               <td>{diem.diem}</td>
//               <td>
//                 <button className="btn btn-success ms-2">Update</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <ThemDiemComponent
//         show={showModal}
//         handleClose={handleClose}
//         listDiem={listDiem}
//       />
//     </div>
//   );
// };

// export default DiemConponent;
