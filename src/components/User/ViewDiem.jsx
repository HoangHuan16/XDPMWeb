import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React from "react";

export const ViewDiem = () => {
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center mt-5 ">
        <div className="w-500" style={{ width: 500 }}>
          <table class="table table-bordered ">
            <tbody>
              <tr>
                <td>Mã sinh viên :</td>
                <td>Huỳnh Hoàng AN</td>
              </tr>
              <tr>
                <td>Tên sinh viên :</td>
                <td>Huỳnh Hoàng AN</td>
              </tr>
              <tr>
                <td>Lớp :</td>
                <td>Huỳnh Hoàng AN</td>
              </tr>
              <tr>
                <td>Số điện thoại :</td>
                <td>Huỳnh Hoàng AN</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>Huỳnh Hoàng AN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mã môn học</th>
              <th scope="col">Tên môn học</th>
              <th scope="col">Điểm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>KTLT</td>
              <td>Kỹ thuật lập trình</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>TOAN</td>
              <td>Toán</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>AV</td>
              <td>Anh Văn</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDiem;
