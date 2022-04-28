import React from 'react'

export const Spacer = ( { orientation, space, backgroundColor } ) => {

    const get_params = () => {
        
        const params = {};

        if ( backgroundColor ) {
            params.backgroundColor = backgroundColor;
        }

        if ( orientation == "horizontal" ) {

            params.marginLeft = space;
            params.marginRight = space;

        }
        else if ( orientation == "vertical" ) {
            
            params.marginTop = space;
            params.marginBottom = space;

        }
        else {
            
            params.margin = space;

        }

        return params;

    }

    return (

        <div style={ get_params() }></div>

    )

}