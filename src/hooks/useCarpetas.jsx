import axios from "axios";

const { useState }   = require("react");
const { apiRequest } = require("../utils/apiRequest");

export const useCarpetas = () => {

    const [ carpetas, setCarpetas ] = useState( [] );
    const [ rutaPrincipal, setRutaPrincipal ] = useState( "" );

    const getCarpetas = async ( ruta, forceRuta = null ) => {

        console.log( "Ruta principal: ", rutaPrincipal );

        let rutaFinal = "";
        if ( forceRuta != "" ) {

            if ( rutaPrincipal.length > 0 ) rutaFinal = rutaPrincipal;
            if ( ruta ) rutaFinal += ruta;

        } else {

            rutaFinal = forceRuta;
            
        }

        console.log( "RUTA MANDADA: ", rutaFinal );

        const { data: res_carpetas } = await axios.get( `${ process.env.REACT_APP_API_URL }/getCarpetas/` , { params: { ruta: rutaFinal } });

        console.log( "Carpetas: ", res_carpetas );

        if ( res_carpetas?.carpetas ) {

            setCarpetas( res_carpetas.carpetas );
            setRutaPrincipal( rutaFinal );

        }

    }

    const atras = async () => {

        setRutaPrincipal( "" );

        await getCarpetas( null, "" );

    }

    return {
        carpetas,
        getCarpetas,
        atras,
        rutaPrincipal
    }

}
