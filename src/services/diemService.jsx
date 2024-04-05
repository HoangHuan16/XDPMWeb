import axios from "axios";


const URL_BASE = 'http://localhost:8080/api/diem';

const fetchAllDiem = () => {
    return axios.get(URL_BASE);
}

const themDiem = (diem) => {
    return axios.post(URL_BASE, diem);
}

const updateDiem = (idDiem, diem) => {
    return axios.put(URL_BASE + '/' + idDiem, diem);
}

export  {fetchAllDiem, themDiem, updateDiem}
