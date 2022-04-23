const { default: axios } = require("axios");
const { session } = require("./session");

exports.apiRequest = async ( method, endpoint, body ) => {

    try {

        const sesion = session.get();
        if ( sesion && sesion.token ) axios.defaults.headers.common['Authorization'] = `Bearer ${ sesion.token }`;

        const url = `${ process.env.REACT_APP_API_URL + endpoint }`;

        const { data } = await axios({
            method: method,
            url: url,
            data: body,
        });

        return data;

    } catch ( err ) {

        console.log( "Err: ", err );

    }

}