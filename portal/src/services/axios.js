import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const URL= 'http://localhost:3000';
export const EquiposGET = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/EquipoComputoGET',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const ModalAdd = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/ModalAdd',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}