import axios from "axios";

const { useState }   = require("react");
const { apiRequest } = require("../utils/apiRequest");

export const useCarpetas = () => {

    const [ carpetas, setCarpetas ] = useState( [] );
    const [ rutaPrincipal, setRutaPrincipal ] = useState( "" );

    const getCarpetas = async ( ruta, forceRuta = null ) => {

        console.log( "Ruta principal: ", rutaPrincipal );

        let rutaFinal = "";
        if ( forceRuta )          rutaFinal += forceRuta;
        else if ( rutaPrincipal ) rutaFinal += rutaPrincipal;
        if ( rutaFinal.length > 0 && rutaFinal.charAt( rutaFinal.length - 1 ) != "/" ) rutaFinal += "/";
        if ( ruta )               rutaFinal += ruta;

        console.log( "RUTA MANDADA: ", rutaFinal );

        const { data: res_carpetas } = await axios.get( `${ process.env.REACT_APP_API_URL }/getCarpetas/` , { params: { ruta: rutaFinal } });

        console.log( "Carpetas: ", res_carpetas );

        if ( res_carpetas?.carpetas ) {

            setCarpetas( res_carpetas.carpetas );
            setRutaPrincipal( rutaFinal );

        }

    }

    const atras = async () => {

        console.log( "Ruta principal: ", rutaPrincipal );

        const nuevaRuta = rutaPrincipal.split("/");

        if ( nuevaRuta.length === 0 ) return;
        
        nuevaRuta.pop();
        const nuevaRutaFinal = nuevaRuta.join( "/" );

        console.log( "Nueva ruta: ", nuevaRutaFinal );

        setRutaPrincipal( nuevaRutaFinal );
        await getCarpetas( null, nuevaRutaFinal );

    }

    return {
        carpetas,
        getCarpetas,
        atras,
        rutaPrincipal
    }

}
