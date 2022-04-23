const { default: axios } = require("axios");

exports.apiRequest = async ( method, endpoint, body ) => {

    try {

        const url = `${ process.env.REACT_APP_API_URL + endpoint }`;

        const { data } = await axios({
            method: method,
            url: url,
            data: body
        });

        return data;

    } catch ( err ) {

        console.log( "Err: ", err );

    }

}