import axios from "axios";

const URL_BASE = 'http://localhost:8080/api/lophoc';

const fetchAllLophoc = () => {
    return axios.get(URL_BASE);
}

const DeleteLop = (idlop) => {
    return axios.delete(URL_BASE + '/' + idlop);
}

const themlop = (lop) => {
    return axios.post(URL_BASE, lop);
}

const updateLop = (idLop, lop) => {
    return axios.put(URL_BASE + '/' + idLop, lop);
}

const getLophoc = (idLop)=>{
    return axios.get(URL_BASE + '/' + idLop);
}

export { fetchAllLophoc, DeleteLop, themlop, updateLop }
