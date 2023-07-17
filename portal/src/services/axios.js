import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const URL = 'http://localhost:3000';

export const getEquipos = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/equipos/todos',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const actualizarFirma = async (data) => {
    try {
        const response = await axios(
            {
                url: URL + "/actualizarfirma",
                method: 'POST',
                data: data
            }
        );

        return response;

    } catch (error) {
        return error;
    }

}

export const modalInfoAgregar = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/infoModalAgregar',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const getEmpresas = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/empresas/lista',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const getCiudades = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/ciudades/lista',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const getPuestos = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/ciudades/lista',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const getTiposEquipo = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/tipos-equipo/lista',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

export const getDepartamentos = async () => {
    try {
        const response = await axios(
            {
                url: URL + '/departamentos/lista',
                method: 'GET',
            }
        );
        return response;

    } catch (error) {
        return error;
    }
}

