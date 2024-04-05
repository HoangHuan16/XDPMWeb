import axios from 'axios';


const URL_BASE = 'http://localhost:8080/api/hocvien';

const fetchAllSinhVien = () => {
  return axios.get(URL_BASE);
}

const DeleteSv = (idsinhvien) => {
  return axios.delete(URL_BASE + '/' + idsinhvien);
}

const addSv = (sv) => {
  return axios.post(URL_BASE, sv);
}

const updateSv = (idsinhvien, sv) => {
  return axios.put(URL_BASE + '/' + idsinhvien, sv);
}

export { fetchAllSinhVien, DeleteSv, addSv, updateSv }
