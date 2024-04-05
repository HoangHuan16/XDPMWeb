import axios from "axios";
const URL_BASE = 'http://localhost:8080/api/monhoc';

const fetchAllMonhoc = () => {
    return axios.get(URL_BASE);
}

const DeleteMon = (idmon) => {
    return axios.delete(URL_BASE + '/' + idmon);
}

const themMon = (mon) => {
    return axios.post(URL_BASE, mon);
}

const updateMon = (idmon, mon) => {
    return axios.put(URL_BASE + '/' + idmon, mon);
}

const getMonhoc = (idmon)=>{
    return axios.get(URL_BASE + '/' + idmon);
}

export {fetchAllMonhoc, DeleteMon, themMon, updateMon};